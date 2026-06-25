import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, SPACING, FONTS } from '../../constants';

export function Button({ label, onPress, variant = 'primary', loading = false, disabled = false, style }) {
  const bg = { primary: COLORS.primary, secondary: COLORS.secondary, outline: 'transparent' }[variant];
  const textColor = variant === 'outline' ? COLORS.primary : COLORS.white;
  const border = variant === 'outline' ? { borderWidth: 2, borderColor: COLORS.primary } : {};

  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bg }, border, style, (disabled || loading) && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading
        ? <ActivityIndicator color={textColor} />
        : <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn:      { borderRadius: 14, paddingVertical: 14, paddingHorizontal: SPACING.lg, alignItems: 'center', justifyContent: 'center' },
  label:    { fontSize: FONTS.sizes.md, fontWeight: '700', letterSpacing: 0.5 },
  disabled: { opacity: 0.5 },
});
