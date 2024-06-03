import { useState } from 'react'
import { useMultistepForm } from './components/useMultistepForm'
import { UserForm } from './components/UserForm'
import { AddressForm } from './components/AddressForm'
import { AccountForm } from './components/AccountForm'
// import { Stepper } from 'react-form-stepper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  const { steps, currentstepindex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ])
  const [activeStep, setActiveStep] = useState(currentstepindex)

  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  

function onSubmit(e) {
  e.preventDefault()
  if (!isLastStep) return next()
  alert("Successful Account Creation")
}

const labels = [ 'User Info','Address Info', 'Account Info',];


  return (
    <div>
      <form onSubmit={onSubmit}>
         <div className=' my-10 w-7/12 ml-60 '>
           {/* <Stepper
            label={label}
            currentstepindex={currentstepindex}
           /> */}
          <Stepper activeStep={activeStep}>
            {labels.map((label, index) => {
             const stepProps = {};
             const labelProps = {};
              return (
              <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
             );
           })}
         </Stepper>

         </div>
         {step}
         <div className="flex mt-10 gap-5 justify-end max-w-md mx-auto">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
