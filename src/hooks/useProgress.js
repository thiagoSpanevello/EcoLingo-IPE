import { useSelector, useDispatch } from 'react-redux';
import { addXP, completeLesson, loseHeart, updateStreak } from '../store/slices/userSlice';
import { StorageService } from '../services/storage';

export function useProgress() {
  const dispatch = useDispatch();
  const user = useSelector(s => s.user);

  const finishLesson = async (lessonId, xpEarned) => {
    dispatch(completeLesson(lessonId));
    dispatch(addXP(xpEarned));
    dispatch(updateStreak());

    await StorageService.saveProgress({
      completedLessons: [...user.completedLessons, lessonId],
      xp: user.xp + xpEarned,
      streak: user.streak,
    });
  };

  const onWrongAnswer      = () => dispatch(loseHeart());
  const isLessonCompleted  = (id) => user.completedLessons.includes(id);

  return { user, finishLesson, onWrongAnswer, isLessonCompleted };
}