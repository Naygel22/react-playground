import './App.css'
import {Card} from "./components/First"
import { Wrapper } from './components/Wrapper'
import { AsideMenu } from './components/AsideMenu';
import { Footer } from './components/Footer';
import { Button } from './components/Form';
import { Comments } from './components/Comments';
import { Parent } from './components/Parent';
import { Posts } from './components/Posts';
import { Cart } from './components/Cart';
import { KidsForm } from './components/KidsForm';


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

export const cards = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Zbigniew",
    surname: "Herbert",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Henryk",
    surname: "Sienkiewicz",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 788",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Wisława",
    surname: "Szymborska",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 787",
  },
];

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
            subComments: [{ comment: "invoice1",username: "test1" }, { comment: "invoice2",username: "test3" }],
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

function App() {

  return (
    <div>
    <AsideMenu />

    <Parent>
    </Parent>
    {/* <Wrapper> */}
      {/* <Card {...singleData}/> */}
      {/* {cards.map(el=><Card key={el.id} {...el} />)} */}
    {/* </Wrapper> */}
    {/* <Button {...cards}/> */}
    <Comments data={data}/>
    <Footer/>
    <Posts />
    <Cart />
    <KidsForm />
    </div>
  )
}

export default App
