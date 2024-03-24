import { useState } from "react";
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
    const [isOpen,setIsOpen]=useState(false)

    function showOrHide() {
      setIsOpen(prev=>!prev)
    }

    return (
      <div className="menu">
        <div className="logo">Logo</div>
        <div>
        {!isOpen && (
          <div>
            {menuData.map(item => {
              return (
                <div key={item.linkName} className="menuBar">
                  <div className="menuIcon">{item.icon}</div>
                  <a href={item.link}>{item.linkName}</a>
                </div>
              );
            })}
          </div>
        )}
        <button onClick={showOrHide} style={{zIndex:1 }}>{isOpen ? "Show" : "Hide"}</button>

        </div>
      </div>
    );
  }
