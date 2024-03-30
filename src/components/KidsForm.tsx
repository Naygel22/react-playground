import { useState, useRef,ElementRef } from 'react';

type Passenger = {
  name: string,
  age: string
}

const initialPassengers: Passenger[] = [
  {
    name: "Barbara",
    age: "10",
  },
];


export function KidsForm() {
  const [passengers, setPassengers] = useState<Passenger[]>(initialPassengers);
  const nameRef = useRef<ElementRef<"input">>(null);
  const ageRef = useRef<ElementRef<"input">>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const nameInput = nameRef.current;
  const ageInput = ageRef.current;

  if (nameInput && ageInput) {
    const name = nameInput.value;
    const age = ageInput.value;

    if(name && age) {
      setPassengers(prev=>[...prev, {name, age}]);
      nameInput.value = ''; 
      ageInput.value = '';

    }
  }
  }


  return (
    <div>
      <h2>Passengers Boarding Bus</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger, index) => (
            <tr key={index}>
              <td>{passenger.name}</td>
              <td>{passenger.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
        <label>
          Age:
          <input type="text" ref={ageRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}