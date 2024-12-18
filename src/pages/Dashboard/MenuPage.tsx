import { Cart, FloatButton, MenuCard } from "../../components";
import { useEffect, useState } from "preact/hooks";
import { useCartStore } from "../../stores";
import { Drinks } from "../../helpers/data/DrinkItems";
import { Product } from "../../interfaces";

export const MenuPage = () => {
  const listItems: Product[] = Drinks;
  const [isOpen, setIsOpen] = useState(false);

  const total   = useCartStore(state => state.total);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    setIsOpen(total > 0);
  }, [total])
  
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
          (isOpen) &&
          <div class={`w-72 flex justify-center`}>
              <div class="fixed min-w-64 max-w-72">
                <Cart handleClose={() => setIsOpen(!isOpen)} />
              </div>
          </div>
        }
        {
          total > 0 &&
          <FloatButton handleAction={() => setIsOpen(!isOpen)} />
        }
    </div>    
  )
}
