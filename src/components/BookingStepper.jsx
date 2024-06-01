import React, { useState } from 'react';
import { Stepper } from 'react-form-stepper';
import SurveyForm from './SurveyForm';

function CustomStepper(props) {
  return (
    <Stepper
      { ...props }
      connectorStateColors={true}
      connectorStyleConfig={{
        completedColor: '#ffbd13',
        activeColor: '#ffbd13',
        disabledColor: '#eee'
      }}
      styleConfig={{
        activeBgColor: '#ffd813',
        completedBgColor: '#ffbd13',
        inactiveBgColor: '#eee',
        activeTextColor: '#111',
        completedTextColor: '#222',
        inactiveTextColor: '#444'
      }}
      />
  );
}

function UserDetails() {
  return <h2>User details</h2>;
}

function Payment() {
  return <h2>Payment information</h2>;
}

function Confirmation() {
  return <h2>Booking is confirmed</h2>;
}

function BookingStepper() {
  const [ activeStep, setActiveStep ] = useState(0);

  const steps = [
    { label: 'User details' },
    { label: 'Payment' },
    { label: 'Booking confirmation' },
  ];

  function getSectionComponent() {
    switch(activeStep) {
      case 0: return <SurveyForm/>;
      case 1: return <Payment/>;
      case 2: return <Confirmation/>;
      default: return null;
    }
  }

  return (
    <div className='bg-black'>
      <CustomStepper
        steps={steps}
        activeStep={activeStep}/>
      <div className='p-[20px]'>
        { getSectionComponent()  }
        <div className='flex gap-5'>
        { (activeStep !== 0 && activeStep !== steps.length - 1)
            && <button onClick={ () => setActiveStep(activeStep - 1) } className='bg-gradient-to-r from-blue-300 to-blue-800 rounded-full p-3 text-white'>Previous</button>
        }
        { activeStep !== steps.length - 1
          && <button onClick={ () => setActiveStep(activeStep + 1)  } className='bg-gradient-to-r from-blue-300 to-blue-800 rounded-full p-3 text-white'>Next</button>
        }
        </div>
      </div>
    </div>
  );
}

export default BookingStepper;