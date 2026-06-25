import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useSelector } from 'react-redux';
import { getModules } from '../../services/lessonService';
import { COLORS, SPACING, FONTS } from '../../constants';
import { XPBadge } from '../../components/common/XPBadge';

export function HomeScreen({ navigation }) {
  const user = useSelector(s => s.user);
  const modules = getModules();

  const openModule = (module) => {
    if (module.lessons.length === 0) {
      Alert.alert(
        'Em breve 🚧',
        'Este módulo ainda não possui lições disponíveis.'
      );
      return;
    }

    const nextLesson = module.lessons.find(
      lesson => !user.completedLessons.includes(lesson.id)
    );

    if (nextLesson) {
      navigation.navigate('Lesson', {
        moduleId: module.id,
        lessonId: nextLesson.id,
      });
    } else {
      Alert.alert(
        'Módulo concluído 🎉',
        'Você já completou todas as lições deste módulo.'
      );
    }
  };

  const renderModule = ({ item }) => {
    const done = item.lessons.filter(
      lesson => user.completedLessons.includes(lesson.id)
    ).length;

    const isEmpty = item.lessons.length === 0;

    return (
      <TouchableOpacity
        style={[
          styles.card,
          { borderLeftColor: item.color },
          isEmpty && styles.disabledCard,
        ]}
        onPress={() => openModule(item)}
        activeOpacity={0.8}
      >
        <Text style={styles.icon}>{item.icon}</Text>

        <View style={styles.info}>
          <Text style={styles.cardTitle}>{item.title}</Text>

          <Text style={styles.cardSub}>
            {isEmpty
              ? 'Em breve'
              : `${done}/${item.lessons.length} lições`}
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Olá, {user.name}! 👋
          </Text>

          <Text style={styles.subGreeting}>
            O que vamos aprender hoje?
          </Text>
        </View>

        <View style={styles.headerRight}>
          <XPBadge xp={user.xp} />
        </View>
      </View>

      <View style={styles.streakBanner}>
        <Text style={styles.streakText}>
          🔥 {user.streak} dias seguidos!
        </Text>
      </View>

      <FlatList
        data={modules}
        keyExtractor={m => m.id}
        renderItem={renderModule}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: SPACING.lg,
  },
  greeting: {
    fontSize: FONTS.sizes.xl,
    fontWeight: '800',
    color: COLORS.primaryDark,
  },
  subGreeting: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textLight,
    marginTop: 2,
  },
  headerRight: {
    alignItems: 'flex-end',
    gap: 6,
  },
  streakBanner: {
    marginHorizontal: SPACING.lg,
    backgroundColor: '#FFF9C4',
    borderRadius: 12,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
  },
  streakText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#F57F17',
  },
  list: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderLeftWidth: 5,
    elevation: 2,
  },
  disabledCard: {
    opacity: 0.6,
  },
  icon: {
    fontSize: 40,
    marginRight: SPACING.md,
  },
  info: {
    flex: 1,
  },
  cardTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '700',
    color: COLORS.text,
  },
  cardSub: {
    fontSize: FONTS.sizes.sm,
    color: COLORS.textLight,
    marginTop: 2,
  },
  arrow: {
    fontSize: 28,
    color: COLORS.textLight,
  },
});