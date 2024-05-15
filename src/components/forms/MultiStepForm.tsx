import * as yup from 'yup'
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { useEffect, useState } from 'react';
import { Client } from '../../api/getAllClients';
import { Order } from '../../api/getAllOrders';

function getStepContent(step: number) {
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

  // const [stepNumber,setStepNumber]=useState(0)

  const [selectedClientPhone, setSelectedClientPhone] = useState('');
  const [selectedClientData, setSelectedClientData] = useState<Client | undefined>(undefined)
  const [pickedOrders, setPickedOrders] = useState<Order[]>([]);

  useEffect(() => {
    setPickedOrders([])
  }, [selectedClientData])




  return (
    <>
      <Step1 setSelectedClientPhone={setSelectedClientPhone} setSelectedClientData={setSelectedClientData} />
      <Step2
        currentClientPhone={selectedClientPhone}
        onUpdatePickedOrders={setPickedOrders}
        pickedOrders={pickedOrders}
      />
      <Step3 selectedClientData={selectedClientData} pickedOrders={pickedOrders} />
    </>
  )
}
