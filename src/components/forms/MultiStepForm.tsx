import * as yup from 'yup'
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { useState } from 'react';

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
    default:
      return "Unknown step";
  }
}

export const MultiStepForm = () => {
  const [selectedClientPhone, setSelectedClientPhone] = useState('');
  const [pickedOrders, setPickedOrders] = useState([]);

  const validationSchema = [
    //validation for step1
    yup.object({
      name: yup.string().required('Name is required'),
    })
  ];

  return (
    <>
      <Step1 setSelectedClientPhone={setSelectedClientPhone} />
      <Step2
        currentClientPhone={selectedClientPhone}
        onUpdatePickedOrders={setPickedOrders}
      />
    </>
  )
}
