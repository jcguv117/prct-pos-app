import { Cart, FloatButton, MenuCard } from "../../components";
import { useState } from "preact/hooks";
import { useCartStore } from "../../stores";
import { Drinks } from "../../helpers/data/DrinkItems";
import { Product } from "../../interfaces";

export const MenuPage = () => {
  const listItems: Product[] = Drinks;
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCartStore(state => state.addItem);

  return (
    <div class="w-full flex gap-5">
        <div class="flex-auto">
          {/* MENU CARD */}
          <div class="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            { 
              listItems && 
              listItems.map((item: Product) => (
                <MenuCard 
                  key={item.label}
                  item={item}
                  add={() => addItem(item)} />
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
