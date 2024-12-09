import { MenuCard } from "../../components";
import { Drinks, DrinkItem } from "../../helpers/data/DrinkItems";

export const MenuPage = () => {
  const listItems: DrinkItem[] = Drinks;
  return (
    <div className="w-full">
          {/* MENU CARD */}
          <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            { 
              listItems && 
              listItems.map((item: DrinkItem) => (
                <MenuCard 
                  key={item.label}
                  item={item}
                  add={() => console.log(item)} />
              ))
            }
          </div>
          {/* MENU CARD END */}
        {/* <div className=''> */}
          {/* SIDEBAR ORDER */}
        {/* </div> */}
    </div>    
  )
}
