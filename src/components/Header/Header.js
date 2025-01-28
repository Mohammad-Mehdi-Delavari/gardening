import React from "react";
import TopBar from "../../elements/TopBar";
import MobileTopBar from "../../elements/MobileTopBar";


export default function Header({items,newItems}) {

  return (
    <header>
     <TopBar cartPros={items} newCartPros={newItems} />
     <MobileTopBar cartPros={items} newCartPros={newItems}/>
    </header>
  );
}
