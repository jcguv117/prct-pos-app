import { MenuCard } from "../../components";
import { Drinks, DrinkItem } from "../../helpers/data/DrinkItems";

export const MenuPage = () => {
  const listItems: DrinkItem[] = Drinks;
  return (
    <div className="w-full grid" style={{gridTemplateColumns: '70% 30%'}}>
        <div className='flex flex-col flex-wrap justify-center'>
          {/* MENU CARD */}
          <div className="flex min-h-screen bg-transparent">
              <div className="flex-1 p-8">
                <div className="text-black cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
          {/* MENU CARD END */}
        </div>
        <div className=''>
          {/* SIDEBAR ORDER */}
        </div>
    </div>    
  )
}
