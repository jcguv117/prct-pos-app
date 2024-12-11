import { faArrowDown, faCancel, faCheck, faChevronDown, faFileInvoice, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartItems } from "./CartItems"

export const Cart = ({handleClose}: { handleClose: () => void }) => {
  return (
    <div 
        class='bg-white text-black h-[95vh] p-6 rounded-lg shadow-md 
                flex flex-col justify-between'
                >  
        <div class="w-full flex flex-row-reverse" >
            <button 
                type="button" 
                class="cursor-pointer" 
                onClick={handleClose}
                    >
                <FontAwesomeIcon  icon={faXmark}  />
            </button>
        </div>
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-x-2">
            <FontAwesomeIcon icon={faFileInvoice} size="2xl"/>
            Nueva Orden
        </h2>
        <div class="flex-auto overflow-auto">
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
        </div>
        <div class="border-t pt-4 mt-4">
            <div class="flex justify-between items-end mb-4 font-semibold">
                <span class="">Total:</span>
                <span class="text-3xl">${21535}</span>
            </div>
            <div class='flex flex-col gap-2'>
                <button  
                    // onClick={()=>add()} 
                    class="bg-green-600 hover:bg-green-700 text-white place-content-center py-3 rounded-md transition-colors flex items-center gap-2"
                    >
                    Confirmar 
                    <FontAwesomeIcon class='text-2xl' icon={faCheck} />
                </button>
                <button 
                    // onClick={()=>reset()}
                    class='bg-gray-600 hover:bg-gray-700 text-white place-content-center py-3 rounded-md transition-colors flex items-center gap-2'
                    >
                    Cancelar 
                    <FontAwesomeIcon class='text-2xl' icon={faCancel} />
                </button>
            </div>
        </div>
    </div>
  )
}
