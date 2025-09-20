import { useEffect, useState } from 'react';

export const useConfetti = (duration = 3000) => {
  const [trigger, setTrigger] = useState(false);

  const triggerConfetti = () => {
    setTrigger(true);
  };

  useEffect(() => {
    let timeoutId;
    if (trigger) {
      timeoutId = setTimeout(() => {
        setTrigger(false);
      }, duration);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [trigger, duration]);

  return { trigger, triggerConfetti };
};
