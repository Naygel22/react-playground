import { useEffect, useState } from 'react'
import { SearchForm } from '../../components/Form';
import { Card } from '../../components/First';
import { Link } from 'react-router-dom';
import { Client, getAllClients } from '../../api/getAllClients';
import { useQuery } from '@tanstack/react-query';

export const Clients = () => {
  const [filteredCards, setFilteredCards] = useState<Client[]>([])
  const { data, isLoading, error } = useQuery({ queryKey: ["clients"], queryFn: getAllClients })

  useEffect(() => {
    if (data) {
      setFilteredCards(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!data) {
    return <p>No data...</p>
  }
  if (error) {
    return <p>Error</p>
  }

  const onSearch = (searchItem: string) => {
    const filteredCards = data.filter(card => card.name.toLowerCase().includes(searchItem.toLowerCase()))
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
