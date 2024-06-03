import { useState } from "react"

export function useMultistepForm(steps) {
  const [currentstepindex, setcurrentstepindex] = useState(0)

  function next() {
    setcurrentstepindex(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
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

  return {
    currentstepindex,
    step: steps[currentstepindex],
    steps,
    isFirstStep: currentstepindex === 0,
    isLastStep: currentstepindex === steps.length - 1,
    goTo,
    next,
    back,
  }
}
