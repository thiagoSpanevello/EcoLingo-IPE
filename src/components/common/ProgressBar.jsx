import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export function ProgressBar({ progress = 0, color = COLORS.primary }) {
  const width = `${Math.min(Math.max(progress * 100, 0), 100)}%`;
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { flex: 1, height: 10, backgroundColor: '#E0E0E0', borderRadius: 99, overflow: 'hidden' },
  fill:  { height: '100%', borderRadius: 99 },
});
