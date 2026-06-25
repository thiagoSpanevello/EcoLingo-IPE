import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from '../../constants';

export function TrueFalseCard({ exercise, onAnswer, selectedAnswer, showFeedback }) {
  const getStyle = (val) => {
    if (!showFeedback) return styles.btn;
    if (val === exercise.correct)                        return [styles.btn, styles.correct];
    if (selectedAnswer === val && val !== exercise.correct) return [styles.btn, styles.wrong];
    return styles.btn;
  };

  return (
    <View>
      <Text style={styles.question}>{exercise.question}</Text>
      <View style={styles.row}>
        {[{ val: true, emoji: '✅', label: 'Verdadeiro' }, { val: false, emoji: '❌', label: 'Falso' }].map(({ val, emoji, label }) => (
          <TouchableOpacity key={String(val)} style={getStyle(val)} onPress={() => onAnswer(val)} disabled={showFeedback}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.label}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: { fontSize: 20, fontWeight: '700', textAlign: 'center', color: COLORS.text, marginBottom: SPACING.xl, lineHeight: 28 },
  row:     { flexDirection: 'row', gap: SPACING.md, justifyContent: 'center' },
  btn:     { flex: 1, paddingVertical: SPACING.lg, backgroundColor: COLORS.white, borderRadius: 16, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', elevation: 2 },
  emoji:   { fontSize: 36 },
  label:   { fontSize: 16, fontWeight: '700', marginTop: 8, color: COLORS.text },
  correct: { borderColor: COLORS.success, backgroundColor: '#E8F5E9' },
  wrong:   { borderColor: COLORS.error,   backgroundColor: '#FFEBEE' },
});
