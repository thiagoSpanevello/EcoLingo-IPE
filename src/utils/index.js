// Embaralha array (Fisher-Yates) — usado para randomizar alternativas
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Calcula XP ganho ao fim de uma lição
export function calcXP({ correct, total, streakBonus = false }) {
  const base = Math.round((correct / total) * 10);
  return streakBonus ? base + 5 : base;
}

// Formata segundos em mm:ss
export function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Mensagem de feedback por % de acerto
export function getFeedbackMessage(percent) {
  if (percent === 100) return '🌟 Perfeito! Você é um guardião da natureza!';
  if (percent >= 75)  return '🌿 Muito bem! Continue assim!';
  if (percent >= 50)  return '🌱 Bom progresso! Tente novamente para melhorar!';
  return '🪴 Não desista! A natureza precisa de você!';
}
