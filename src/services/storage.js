/**
 * Wrapper do AsyncStorage para persistir progresso localmente
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  USER_PROFILE: '@ecolingo:user_profile',
  PROGRESS:     '@ecolingo:progress',
  SETTINGS:     '@ecolingo:settings',
  STREAK:       '@ecolingo:streak',
};

export const StorageService = {
  async saveUserProfile(profile) {
    await AsyncStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
  },
  async getUserProfile() {
    const data = await AsyncStorage.getItem(KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : null;
  },
  async saveProgress(progress) {
    await AsyncStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
  },
  async getProgress() {
    const data = await AsyncStorage.getItem(KEYS.PROGRESS);
    return data ? JSON.parse(data) : {};
  },
  async updateStreak(lastDate) {
    await AsyncStorage.setItem(KEYS.STREAK, JSON.stringify({ lastDate }));
  },
  async getStreak() {
    const data = await AsyncStorage.getItem(KEYS.STREAK);
    return data ? JSON.parse(data) : { lastDate: null };
  },
  async clearAll() {
    await AsyncStorage.multiRemove(Object.values(KEYS));
  },
};
