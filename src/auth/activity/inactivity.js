import { useState, useEffect } from "react";

// Custom hook to detect user inactivity
export const useInactivityTimeout = (timeoutDuration) => {
  const [isInactive, setIsInactive] = useState(false);

  let timeout;

  const resetTimer = () => {
    // Clear the previous timeout and set a new one
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsInactive(true); // Mark user as inactive after timeout
    }, timeoutDuration); // e.g., 15 minutes of inactivity
  };

  useEffect(() => {
    // Listen to mouse and keyboard events to detect activity
    const events = ["mousemove", "keydown", "scroll", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Start the timer when the component is mounted
    resetTimer();

    // Cleanup on component unmount
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timeout);
    };
  }, []);

  return isInactive; // Return inactivity status
};
