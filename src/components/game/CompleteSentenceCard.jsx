/**
 * Exercício de completar lacuna na frase
 * TODO: implementar lógica de seleção de palavra
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from '../../constants';

export function CompleteSentenceCard({ exercise, onAnswer, selectedAnswer, showFeedback }) {
  const [before, after] = exercise.question.split('___');

  const getStyle = (i) => {
    if (!showFeedback || selectedAnswer === null) return styles.chip;
    if (i === exercise.correct) return [styles.chip, styles.correct];
    if (i === selectedAnswer)   return [styles.chip, styles.wrong];
    return styles.chip;
  };

  return (
    <View>
      <View style={styles.sentenceRow}>
        <Text style={styles.sentenceText}>{before}</Text>
        <View style={[styles.blank, selectedAnswer !== null && styles.blankFilled]}>
          <Text style={styles.blankText}>
            {selectedAnswer !== null ? exercise.options[selectedAnswer] : '___'}
          </Text>
        </View>
        <Text style={styles.sentenceText}>{after}</Text>
      </View>
      <View style={styles.options}>
        {exercise.options.map((opt, i) => (
          <TouchableOpacity key={i} style={getStyle(i)} onPress={() => onAnswer(i)} disabled={showFeedback}>
            <Text style={styles.chipText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sentenceRow:  { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.xl },
  sentenceText: { fontSize: 20, fontWeight: '600', color: COLORS.text },
  blank:        { borderBottomWidth: 3, borderColor: COLORS.primary, minWidth: 80, alignItems: 'center', marginHorizontal: 4 },
  blankFilled:  { backgroundColor: COLORS.primaryLight, borderRadius: 8, borderBottomWidth: 0, paddingHorizontal: 8 },
  blankText:    { fontSize: 20, fontWeight: '700', color: COLORS.primaryDark },
  options:      { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, justifyContent: 'center' },
  chip:         { backgroundColor: COLORS.white, borderRadius: 99, borderWidth: 2, borderColor: COLORS.border, paddingHorizontal: 20, paddingVertical: 10 },
  chipText:     { fontSize: 16, fontWeight: '600', color: COLORS.text },
  correct:      { borderColor: COLORS.success, backgroundColor: '#E8F5E9' },
  wrong:        { borderColor: COLORS.error,   backgroundColor: '#FFEBEE' },
});
