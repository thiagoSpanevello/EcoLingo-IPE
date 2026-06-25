import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function HeartBar({ hearts = 5, maxHearts = 5 }) {
  return (
    <View style={styles.row}>
      {Array.from({ length: maxHearts }).map((_, i) => (
        <Text key={i} style={styles.heart}>{i < hearts ? '❤️' : '🖤'}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row:   { flexDirection: 'row', gap: 2 },
  heart: { fontSize: 18 },
});
