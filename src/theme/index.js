import { COLORS, SPACING } from '../constants';

export const theme = {
  colors: COLORS,
  spacing: SPACING,
  card: {
    borderRadius: 16,
    padding: SPACING.md,
    backgroundColor: COLORS.cardBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  button: {
    primary:   { backgroundColor: COLORS.primary,   borderRadius: 12, paddingVertical: 14, paddingHorizontal: SPACING.lg },
    secondary: { backgroundColor: COLORS.secondary,  borderRadius: 12, paddingVertical: 14, paddingHorizontal: SPACING.lg },
    outline:   { backgroundColor: 'transparent', borderWidth: 2, borderColor: COLORS.primary, borderRadius: 12, paddingVertical: 14, paddingHorizontal: SPACING.lg },
  },
};
