import { Cart, FloatButton, MenuCard } from "../../components";
import { useState } from "preact/hooks";
import { useCartStore } from "../../stores";
import { Drinks } from "../../helpers/data/DrinkItems";
import { Product } from "../../interfaces";

export const MenuPage = () => {
  const listItems: Product[] = Drinks;
  const [isOpen, setIsOpen] = useState(false);

  const total         = useCartStore(state => state.total);
  const addItem       = useCartStore(state => state.addItem);
  const countItems    = useCartStore(state => state.getCountItems());

  
  return (
    <div class="w-full flex gap-2">
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
          (isOpen && total > 0) &&
          <div class={`sm:w-72 flex justify-center`}>
              <div class="fixed right-0 top-0 sm:top-2 w-full shadow-lg sm:min-w-64 sm:max-w-72">
                <Cart handleClose={() => setIsOpen(!isOpen)} />
              </div>
          </div>
        }
        {
          (!isOpen && total > 0) &&
          <FloatButton count={countItems} handleAction={() => setIsOpen(!isOpen)} />
        }
    </div>    
  )
}
