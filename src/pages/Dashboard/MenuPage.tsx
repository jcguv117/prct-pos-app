import { Cart, MenuCard } from "../../components";
import { Drinks, DrinkItem } from "../../helpers/data/DrinkItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

export const MenuPage = () => {
  const listItems: DrinkItem[] = Drinks;
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

          {/* SIDEBAR ORDER */}
        <div class="w-72">
          {/* <div class="fixed bottom-4 right-4">
            <button 
              type="button" 
              class="rounded-full bg-green-600 h-16 w-16"
              >
              <FontAwesomeIcon icon={faFileInvoice} size="2xl" />
            </button>
          </div> */}
          <div class="fixed mr-2 w-72">
            <Cart />
          </div>
        </div>
    </div>    
  )
}
