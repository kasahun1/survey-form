import { useState } from "react"

export function useMultistepForm(steps) {
  const [currentstepindex, setcurrentstepindex] = useState(0)
  const [completed, setCompleted] = useState({});

  function next() {
    setcurrentstepindex(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
    handleComplete()
  }

  function back() {
    setcurrentstepindex(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index) {
    if (index < 0 || index >= steps.length) {
        throw new Error('Index out of bounds');
      }
      setcurrentstepindex(index)
  }

  const handleStep = (currentstepindex) => () => {
    setcurrentstepindex(currentstepindex);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[currentstepindex] = true;
    setCompleted(newCompleted);
    
  };
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return {
    currentstepindex,
    step: steps[currentstepindex],
    steps,
    isFirstStep: currentstepindex === 0,
    isLastStep: currentstepindex === steps.length - 1,
    goTo,
    next,
    back,
    handleComplete,
    handleStep,
    completed,
    allStepsCompleted,
    handleReset,
  }
}
