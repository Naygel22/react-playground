

export const Step3 = ({ selectedClientData, pickedOrders }) => {
  return (
    <>
      <div>Summary:</div>
      <div>Client:</div>
      {selectedClientData &&
        <div>
          <p>Name: {selectedClientData.name}</p>
          <p>Surname: {selectedClientData.surname}</p>
          <p>Street: {selectedClientData.street}</p>
          <p>Post Code: {selectedClientData.postCode}</p>
          <p>Town: {selectedClientData.town}</p>
          {selectedClientData.subRegion && (
            <p>Sub region: {selectedClientData.subRegion}</p>
          )}
          <p>Phone number: {selectedClientData.phoneNumber}</p>
        </div>
      }
      <div>Pays for:</div>
      {pickedOrders.map(order => (
        <div key={order.id}>{`Order ${order.id}`}</div>
      ))}

    </>

  )
}
