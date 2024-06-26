import { useState,useEffect } from "react";
import {Card} from "./First";
import {cards} from '../App';

// type Human={
//     age:number;
//     surname:string;
// }

// export const Button = () => {
//     const [humans,setHumans]=useState<Human[]>([])
//    const [surname, setSurname] = useState("");
//   const [age, setAge] = useState(0);

//   const handleSubmit = (e:React.SyntheticEvent) => {
//     e.preventDefault();
//     setHumans(prev=>[...prev,{surname, age}]);
//   };

//   useEffect(()=>{
//     console.log("age",age)
//   },[age])
//   return (<>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="surname">Surname</label>
//       <input
//         type="text"
//         name="surname"
//         onChange={(e) => setSurname(e.target.value)}
//       />
//       <label htmlFor="surname">Age</label>
//       <input
//         type="number"
//         name="age"
//         onChange={(e) => setAge(Number(e.target.value))}
//       />
//       <button type="submit">Send form</button>
//     </form>
//     {humans.map((el,index)=><div key={index}>{el.age} {el.surname}</div>)}
//     </>
//   );
// };


type SearchFormProps={
  onSearch: (searchItem:string)=>void
}

export const SearchForm = ({onSearch}:SearchFormProps) => {
  const [searchItem, setsearchItem] = useState("");
  // const [filteredItem, setfilteredItem] = useState(cards);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSearch(searchItem);
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Find a client</label>
      <input 
      type="text" 
      value={searchItem}
      onChange={e => setsearchItem(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </>
    
      
  );
}