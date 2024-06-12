import { useState } from 'react'
import { useMultistepForm } from './components/useMultistepForm'
import { UserForm } from './components/UserForm'
import { AddressForm } from './components/AddressForm'
import { AccountForm } from './components/AccountForm'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import SuccessMessage from './components/SuccessMessage'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Purchase from './components/Purchase'




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

const labels = [ 'User Info','Address Info', 'Account Info'];

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  const { steps, completed, setcurrentstepindex, handleComplete, handleStep, currentstepindex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
    // <Purchase/>,
    <SuccessMessage firstName={data.firstName}/>
  ])


  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  

function onSubmit(e) {
  e.preventDefault()
  if (!isLastStep) return next()
  alert( "All steps completed successfully - you're finished")
}


  return (
    <div>
      <form onSubmit={onSubmit}>
         <div className=' my-10 w-7/12 ml-60 '>
          <Stepper currentstepindex={currentstepindex}>
            {labels.map((label, index) => {
              return (
              <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
              </Step>
             );
           })}
         </Stepper>
         </div>
         {step}
         {
          currentstepindex >= steps.length-1 ? (
            <div className='flex justify-center mt-5'>
              <Button variant="contained" startIcon={<ArrowBackIcon />} color="success" size="small">
               home
            </Button>
            </div>
          ) : (
            <div className="flex mt-10 gap-5 justify-end max-w-md mx-auto">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit" onClick={handleComplete}>{isLastStep ? "Finish" : "Next"}</button>
        </div>
          )
         }
        
      </form>
    </div>
  )
}

export default App
