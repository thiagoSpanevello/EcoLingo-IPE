import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  xp: 0,
  level: 1,
  streak: 0,
  lastPlayedDate: null, // Vai guardar apenas 'YYYY-MM-DD'
  completedLessons: [],
  hearts: 5,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => ({ ...state, ...action.payload }),
    addXP(state, action) {
      state.xp += action.payload;
      state.level = Math.floor(state.xp / 100) + 1;
    },
    completeLesson(state, action) {
      if (!state.completedLessons.includes(action.payload))
        state.completedLessons.push(action.payload);
    },

    // NOVO UPDATESTREAK AUTOMÁTICO E INTELIGENTE
   updateStreak(state) {
         const hoje = new Date();
         hoje.setHours(0, 0, 0, 0);
         const hojeStr = hoje.toISOString().split('T')[0];

         if (!state.lastPlayedDate) {
           state.streak = 1;
         } else {
           // Força a data antiga a ser lida no mesmo horário local zerado
           const ultimaData = new Date(state.lastPlayedDate + 'T00:00:00');

           const diffTempo = hoje.getTime() - ultimaData.getTime();
           // O Math.round garante que pequenas variações de fuso virem 1 dia exato
           const diffDias = Math.round(diffTempo / (1000 * 60 * 60 * 24));

           if (diffDias === 1) {
             state.streak += 1;
           } else if (diffDias > 1) {
             state.streak = 1;
           }
         }

         state.lastPlayedDate = hojeStr;
       },

    loseHeart(state)  { if (state.hearts > 0) state.hearts -= 1; },
    refillHearts(state) { state.hearts = 5; },
    resetUser: () => initialState,
  },
});

export const { setUser, addXP, completeLesson, updateStreak, loseHeart, refillHearts, resetUser } = userSlice.actions;
export default userSlice.reducer;