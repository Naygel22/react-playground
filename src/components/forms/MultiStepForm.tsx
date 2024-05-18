import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { useEffect, useState } from 'react';
import { Client } from '../../api/getAllClients';
import { Order } from '../../api/getAllOrders';

export const MultiStepForm = () => {

  const [stepNumber, setStepNumber] = useState(0)

  const [selectedClientPhone, setSelectedClientPhone] = useState('');
  const [selectedClientData, setSelectedClientData] = useState<Client | undefined>(undefined)
  const [pickedOrders, setPickedOrders] = useState<Order[]>([]);

  useEffect(() => {
    setPickedOrders([])
  }, [selectedClientData])



  return (
    <>
      {stepNumber === 0 && <Step1
        setSelectedClientPhone={setSelectedClientPhone}
        setSelectedClientData={setSelectedClientData}
        setStepNumber={setStepNumber} />}
      {stepNumber === 1 && <Step2
        currentClientPhone={selectedClientPhone}
        onUpdatePickedOrders={setPickedOrders}
        pickedOrders={pickedOrders}
        setStepNumber={setStepNumber} />}
      {stepNumber === 2 && <Step3
        selectedClientData={selectedClientData}
        pickedOrders={pickedOrders}
        setStepNumber={setStepNumber} />}
    </>
  )
}
