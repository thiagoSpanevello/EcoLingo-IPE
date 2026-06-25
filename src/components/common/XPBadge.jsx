import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export function XPBadge({ xp }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>⚡ {xp} XP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { backgroundColor: COLORS.secondary, borderRadius: 99, paddingHorizontal: 12, paddingVertical: 4 },
  text:  { fontWeight: '700', color: '#fff', fontSize: 13 },
});
