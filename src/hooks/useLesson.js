import { useState, useCallback } from 'react';
import { calcXP, getFeedbackMessage } from '../utils';

export function useLesson(exercises = []) {
  const [currentIndex,  setCurrentIndex]  = useState(0);
  const [correctCount,  setCorrectCount]  = useState(0);
  const [finished,      setFinished]      = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback,  setShowFeedback]  = useState(false);

  const currentExercise = exercises[currentIndex];
  const progress = exercises.length > 0 ? currentIndex / exercises.length : 0;

  const handleAnswer = useCallback((answer) => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
    setShowFeedback(true);
    const isCorrect = answer === currentExercise.correct;
    if (isCorrect) setCorrectCount(c => c + 1);
  }, [currentExercise, showFeedback]);

  const nextExercise = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentIndex + 1 >= exercises.length) setFinished(true);
    else setCurrentIndex(i => i + 1);
  }, [currentIndex, exercises.length]);

  const xpEarned = calcXP({ correct: correctCount, total: exercises.length });
  const feedbackMessage = getFeedbackMessage(
    exercises.length > 0 ? (correctCount / exercises.length) * 100 : 0
  );

  return { currentExercise, currentIndex, progress, correctCount, finished,
           selectedAnswer, showFeedback, xpEarned, feedbackMessage, handleAnswer, nextExercise };
}
