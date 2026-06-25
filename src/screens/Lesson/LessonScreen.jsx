import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useProgress } from '../../hooks/useProgress';
import { useLesson } from '../../hooks/useLesson';
import { getLessonById } from '../../services/lessonService';
import { ProgressBar } from '../../components/common/ProgressBar';
import { MultipleChoiceCard } from '../../components/game/MultipleChoiceCard';
import { TrueFalseCard } from '../../components/game/TrueFalseCard';
import { CompleteSentenceCard } from '../../components/game/CompleteSentenceCard';
import { Button } from '../../components/common/Button';
import { COLORS, SPACING, FONTS, EXERCISE_TYPES } from '../../constants';

export function LessonScreen({ route, navigation }) {
  const { moduleId, lessonId } = route.params;
  const lesson = getLessonById(moduleId, lessonId);
  const { finishLesson } = useProgress();
  const {
    currentExercise, progress, finished,
    selectedAnswer, showFeedback, xpEarned, feedbackMessage,
    handleAnswer, nextExercise,
  } = useLesson(lesson?.exercises || []);

  if (!lesson) return null;

  if (finished) {
    return (
      <SafeAreaView style={[styles.safe, styles.center]}>
        <Text style={styles.finishEmoji}>🎉</Text>
        <Text style={styles.finishTitle}>Lição Concluída!</Text>
        <Text style={styles.finishMsg}>{feedbackMessage}</Text>
        <Text style={styles.xpText}>+{xpEarned} XP</Text>
        <Button
          label="Voltar para o Início"
          onPress={async () => {
            await finishLesson(lessonId, xpEarned);
            navigation.goBack();
          }}
          style={{ marginTop: SPACING.xl, width: '80%' }}
        />
      </SafeAreaView>
    );
  }

  const handleAnswerWrapper = (answer) => {
    handleAnswer(answer);
  };

  const renderExercise = () => {
    const props = { exercise: currentExercise, onAnswer: handleAnswerWrapper, selectedAnswer, showFeedback };
    switch (currentExercise.type) {
      case EXERCISE_TYPES.MULTIPLE_CHOICE:    return <MultipleChoiceCard {...props} />;
      case EXERCISE_TYPES.TRUE_FALSE:          return <TrueFalseCard {...props} />;
      case EXERCISE_TYPES.COMPLETE_SENTENCE:  return <CompleteSentenceCard {...props} />;
      default: return <Text>Tipo de exercício não suportado: {currentExercise.type}</Text>;
    }
  };

  const isCorrect = selectedAnswer !== null && selectedAnswer === currentExercise.correct;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeBtn}>✕</Text>
        </TouchableOpacity>
        <ProgressBar progress={progress} />
      </View>

      <View style={styles.body}>{renderExercise()}</View>

      {showFeedback && (
        <View style={[styles.feedback, isCorrect ? styles.correctBar : styles.wrongBar]}>
          <Text style={styles.feedbackText}>{isCorrect ? '✅ Correto!' : '❌ Quase lá!'}</Text>
          <Button label="Continuar" onPress={nextExercise} style={styles.nextBtn} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:         { flex: 1, backgroundColor: COLORS.background },
  center:       { alignItems: 'center', justifyContent: 'center', padding: SPACING.lg },
  header:       { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, padding: SPACING.md },
  closeBtn:     { fontSize: 22, color: COLORS.textLight, paddingRight: SPACING.sm, fontWeight: 'bold' },
  body:         { flex: 1, padding: SPACING.lg, justifyContent: 'center' },
  feedback:     { padding: SPACING.lg, paddingBottom: SPACING.xl },
  correctBar:   { backgroundColor: '#E8F5E9' },
  wrongBar:     { backgroundColor: '#FFEBEE' },
  feedbackText: { fontSize: FONTS.sizes.lg, fontWeight: '700', color: COLORS.text, marginBottom: SPACING.md },
  nextBtn:      { width: '100%' },
  finishEmoji:  { fontSize: 80 },
  finishTitle:  { fontSize: FONTS.sizes.xxl, fontWeight: '800', color: COLORS.primaryDark, marginTop: 8 },
  finishMsg:    { fontSize: FONTS.sizes.md, color: COLORS.textLight, textAlign: 'center', marginTop: 8 },
  xpText:       { fontSize: FONTS.sizes.xl, fontWeight: '800', color: COLORS.secondary, marginTop: SPACING.md },
});