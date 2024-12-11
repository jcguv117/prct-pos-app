import { Cart, FloatButton, MenuCard } from "../../components";
import { Drinks, DrinkItem } from "../../helpers/data/DrinkItems";
import { useState } from "preact/hooks";

export const MenuPage = () => {
  const listItems: DrinkItem[] = Drinks;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="w-full flex gap-5">
        <div class="flex-auto">
          {/* MENU CARD */}
          <div class="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
        {
          <>
            <div class={`w-72 transition-transform ${isOpen ? '-translate-x-0' : 'translate-x-full hidden'}`}>
                <div class="fixed mr-2 w-72">
                  <Cart handleClose={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            <FloatButton handleAction={() => setIsOpen(!isOpen)} />
            </>
        }
    </div>    
  )
}
