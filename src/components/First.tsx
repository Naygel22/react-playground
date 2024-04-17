import { Client } from "../api/getAllClients";

export const Card = ({ imgSrc, name, surname, street, postCode, town, subRegion, phoneNumber }: Client) => {

  const handleClick = () => {
    console.log("Hello world", name)
  }

  return (
    <span className="card">
      <img className="avatar" onClick={handleClick} src={imgSrc}></img>

      <div className="info">
        <div className="nameBar">
          <div className="name">{name}</div>
          <div className="surname">{surname}</div>
        </div>

        <div className="adress">
          <div className="adressBar">
            <div className="street">{street}</div>
            <div className="postCode">{postCode}</div>
          </div>

          <div className="town">{town}</div>
          <div className="subRegion">{subRegion}</div>
        </div>
        <div className="phoneNumber">{phoneNumber}</div>
      </div>
    </span>
  )
}
