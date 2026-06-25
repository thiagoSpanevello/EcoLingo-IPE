/**
 * Exercício de múltipla escolha com emojis/imagens grandes
 * Acessível para crianças com dificuldade de leitura
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from '../../constants';

export function MultipleChoiceCard({ exercise, onAnswer, selectedAnswer, showFeedback }) {
  const getStyle = (i) => {
    if (!showFeedback || selectedAnswer === null) return styles.option;
    if (i === exercise.correct) return [styles.option, styles.correct];
    if (i === selectedAnswer)   return [styles.option, styles.wrong];
    return styles.option;
  };

  return (
    <View>
      <Text style={styles.question}>{exercise.question}</Text>
      <View style={styles.grid}>
        {exercise.options.map((opt, i) => (
          <TouchableOpacity key={i} style={getStyle(i)} onPress={() => onAnswer(i)} disabled={showFeedback} activeOpacity={0.75}>
            <Text style={styles.optText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: { fontSize: 20, fontWeight: '700', color: COLORS.text, textAlign: 'center', marginBottom: SPACING.lg, lineHeight: 28 },
  grid:     { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.md, justifyContent: 'center' },
  option:   { width: '44%', aspectRatio: 1, backgroundColor: COLORS.white, borderRadius: 16, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center', elevation: 2 },
  optText:  { fontSize: 44 },
  correct:  { borderColor: COLORS.success, backgroundColor: '#E8F5E9' },
  wrong:    { borderColor: COLORS.error,   backgroundColor: '#FFEBEE' },
});
