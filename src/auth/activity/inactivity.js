import { useState, useEffect } from "react";

export const useInactivityTimeout = (timeoutDuration) => {
  const [isInactive, setIsInactive] = useState(false);

  let timeout;

  const resetTimer = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsInactive(true); 
    }, timeoutDuration); 
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timeout);
    };
  }, []);

  return isInactive;
};
