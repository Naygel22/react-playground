import { useEffect, useState } from 'react'
import { SearchForm } from '../../components/Form';
import { Card } from '../../components/First';
import { Link } from 'react-router-dom';
import { getAllClients } from '../../api/getAllClients';

// const cards = [
//   {
//     id: 1,
//     imgSrc:
//       "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
//     name: "Zbigniew",
//     surname: "Herbert",
//     street: "TestStreet",
//     postCode: "00-123",
//     town: "Town",
//     subRegion: "Region",
//     phoneNumber: "+48 123 456 789",
//   },
//   {
//     id: 2,
//     imgSrc:
//       "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
//     name: "Henryk",
//     surname: "Sienkiewicz",
//     street: "TestStreet",
//     postCode: "00-123",
//     town: "Town",
//     subRegion: "Region",
//     phoneNumber: "+48 123 456 788",
//   },
//   {
//     id: 3,
//     imgSrc:
//       "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
//     name: "Wisława",
//     surname: "Szymborska",
//     street: "TestStreet",
//     postCode: "00-123",
//     town: "Town",
//     subRegion: "Region",
//     phoneNumber: "+48 123 456 787",
//   },
// ];

export const Clients = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([])

  useEffect(() => {
    getAllClients().then((data) => {
      setCards(data);
      setFilteredCards(data);
    });
  }, []);

  const onSearch = (searchItem: string) => {
    const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchItem.toLowerCase()))
    console.log("filteredCards", filteredCards)
    setFilteredCards(filteredCards)
  }

  return (
    <>
      <SearchForm onSearch={onSearch} />
      {

        filteredCards.map(el => <Link key={el.id} to={`/clients/${el.id}`}><Card  {...el} /></Link>)
      }
    </>
  )
}
