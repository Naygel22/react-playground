import { BsFillPeopleFill, BsFillBagCheckFill,BsFillFileEarmarkRuledFill, BsFillHddRackFill } from "react-icons/bs";


const menuData = [
    {
      linkName: "Clients",
      link: "/clients",
      icon: <BsFillPeopleFill/>,
    },
    {
      linkName: "Orders",
      link: "/orders",
      icon: <BsFillBagCheckFill/>,
    },
    {
      linkName: "Facture",
      link: "/invoices",
      icon: <BsFillFileEarmarkRuledFill/>,
    },
    {
      linkName: "Posts",
      link: "/posts",
      icon: <BsFillHddRackFill/>,
    },
  ];

  export function AsideMenu() {
    return (
      <div className="menu">
        <div className="logo">Logo</div>
        <div>
          {menuData.map(item => {
            return (
              <div key={item.linkName}  className="menuBar">
                <div className="menuIcon">{item.icon}</div>
                <a href={item.link}>{item.linkName}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
