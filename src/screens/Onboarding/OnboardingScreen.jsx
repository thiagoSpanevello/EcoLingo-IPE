import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { Button } from '../../components/common/Button';
import { COLORS, SPACING, FONTS } from '../../constants';

export function OnboardingScreen({ navigation }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleStart = () => {
    if (!name.trim()) return;
    dispatch(setUser({ name: name.trim() }));
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.logo}>🌱</Text>
        <Text style={styles.title}>EcoLingo</Text>
        <Text style={styles.subtitle}>Educação Ambiental é para Todos!</Text>
        <Text style={styles.fieldLabel}>Qual é o seu nome?</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          placeholderTextColor={COLORS.textLight}
          maxLength={30}
        />
        <Button label="Começar! 🌿" onPress={handleStart} disabled={!name.trim()} style={styles.btn} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:       { flex: 1, backgroundColor: COLORS.background },
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', padding: SPACING.xl },
  logo:       { fontSize: 80 },
  title:      { fontSize: FONTS.sizes.xxl, fontWeight: '800', color: COLORS.primaryDark, marginTop: 8 },
  subtitle:   { fontSize: FONTS.sizes.md, color: COLORS.textLight, marginBottom: SPACING.xl, textAlign: 'center' },
  fieldLabel: { fontSize: FONTS.sizes.md, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.sm, alignSelf: 'flex-start' },
  input: {
    width: '100%', backgroundColor: COLORS.white, borderRadius: 12,
    borderWidth: 2, borderColor: COLORS.border,
    paddingHorizontal: SPACING.md, paddingVertical: 14,
    fontSize: FONTS.sizes.md, color: COLORS.text, marginBottom: SPACING.lg,
  },
  btn: { width: '100%' },
});
