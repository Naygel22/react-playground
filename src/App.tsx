import './App.css'
import { Card } from "./components/First"
import { Wrapper } from './components/Wrapper'
import { AsideMenu } from './components/AsideMenu';
import { Footer } from './components/Footer';
import { Button } from './components/Form';
import { Comments } from './components/Comments';
import { Posts } from './components/Posts';
import { Cart } from './components/Cart';
import { KidsForm } from './components/KidsForm';
import { ClickBox } from './components/ClickBox';
import { Navigation } from './components/Navigation';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientForm from './components/ClientForm';
import { ClientFormValues } from './validators/validators';
import { FakeRegisterComponent } from './components/forms/FakeRegisterComponent';
import { FakeLoginComponent } from './components/forms/FakeLoginComponent';
import { Browse } from './components/Browse';

const singleData = {
  imgSrc: "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  name: "Adam",
  surname: "Jochemczyk",
  street: "TestStreet",
  postCode: "00-123",
  town: "Town",
  subRegion: "Region",
  phoneNumber: "+48 123 456 789",
};

const data = [
  {
    username: "test1",
    comment: "documents",
    subComments: [
      {
        username: "test2",
        comment: "27-10-1990",
      },
      {
        username: "test3",
        comment: "invoices",
        subComments: [
          {
            comment: "electricityBills",
            username: "test2",
            subComments: [{ comment: "invoice1", username: "test1" }, { comment: "invoice2", username: "test3" }],
          },
        ],
      },
    ],
  },
  {
    comment: "photos",
    username: "test2",
    subComments: [
      {
        comment: "summer2020",
        username: "test3",
        subComments: [{ comment: "10.25", username: "test1" }],
      },
    ],
  },
];

const initialFormValues: ClientFormValues = {
  name: "",
  surname: "",
  street: "",
  postCode: "",
  city: "",
  region: "",
  photoUrl: "",
  phoneNumber: "",
};

function App() {

  return (
    <div>
      {/* <AsideMenu /> */}
      {/* <Wrapper> */}
      {/* <Card {...singleData}/> */}
      {/* {cards.map(el=><Card key={el.id} {...el} />)} */}
      {/* </Wrapper> */}
      {/* <Button {...cards}/> */}
      {/* <Comments data={data} />
      <Footer />
      <Posts />
      <Cart />
      <KidsForm />
      <ClickBox onClickOutside={() => console.log('Clicked outside')} /> */}

      <Browse />
    </div>
  )
}

export default App
