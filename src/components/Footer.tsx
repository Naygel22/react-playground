const footerData = {
  link1: "/link1",
  documents: "/documents",
  documentation: "/documentation",
}

//Object.keys -> keys
//Object.values -> values
//Object.entries => [[key,value]]

export const Footer = () => {
  return (
    <div>
      {Object.entries(footerData).map(([key,value])=>{
        return <a  style={{marginLeft: "20px"}} key={value} href={value}>{key}</a>
        })}
    </div>
  )
}
