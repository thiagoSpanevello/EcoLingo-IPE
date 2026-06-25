import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS, SPACING, FONTS } from '../../constants';
import { XPBadge } from '../../components/common/XPBadge';

export function ProfileScreen() {
  const user = useSelector(s => s.user);
  const stats = [
    { label: 'Nível',    value: user.level,                      emoji: '⭐' },
    { label: 'XP Total', value: user.xp,                         emoji: '⚡' },
    { label: 'Sequência', value: `${user.streak} dias`,          emoji: '🔥' },
    { label: 'Lições',   value: user.completedLessons.length,    emoji: '📚' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.avatar}>🌿</Text>
        <Text style={styles.name}>{user.name}</Text>
        <XPBadge xp={user.xp} />
        <View style={styles.grid}>
          {stats.map(s => (
            <View key={s.label} style={styles.card}>
              <Text style={styles.emoji}>{s.emoji}</Text>
              <Text style={styles.val}>{s.value}</Text>
              <Text style={styles.lbl}>{s.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:      { flex: 1, backgroundColor: COLORS.background },
  container: { alignItems: 'center', padding: SPACING.xl },
  avatar:    { fontSize: 80 },
  name:      { fontSize: FONTS.sizes.xxl, fontWeight: '800', color: COLORS.primaryDark, marginVertical: 8 },
  grid:      { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.md, marginTop: SPACING.xl, justifyContent: 'center' },
  card:      { width: 140, backgroundColor: COLORS.white, borderRadius: 16, padding: SPACING.md, alignItems: 'center', elevation: 2 },
  emoji:     { fontSize: 32 },
  val:       { fontSize: FONTS.sizes.xl, fontWeight: '800', color: COLORS.primaryDark, marginTop: 4 },
  lbl:       { fontSize: FONTS.sizes.sm, color: COLORS.textLight, marginTop: 2 },
});
