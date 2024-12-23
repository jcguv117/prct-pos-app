import { faCancel, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartItems } from "./CartItems"
import { useOrderStore, useCartStore } from "../../../stores"
import { CartItem } from "../../../interfaces/Cart.interface"
import { StatusOrder } from "../../../interfaces"
import { formatNumberWithCommas, swalAlert } from "../../../helpers"


export const Cart = ({handleClose}: { handleClose: () => void }) => {

    const cartItems     = useCartStore(state => state.items)
    const total         = useCartStore(state => state.total)
    const cleanItems    = useCartStore(state => state.cleanItems)

    const confirmOrder      = useOrderStore(state => state.confirmOrder) 
    const getOrderEditing   = useOrderStore(state => state.getOrderEditing) 
    const orderEditing      = useOrderStore(state => state.orderEditing) 
    const updateStatusOrder = useOrderStore(state => state.updateStatusOrder) 
    const updateOrder       = useOrderStore(state => state.updateOrder) 

    const handleConfirm = (total: number, cartItems: CartItem[]) => {
        const orderEditingId = getOrderEditing();
        const iconAlert = "success";
        if(orderEditingId) {
            updateOrder(orderEditingId, total, cartItems);
            swalAlert({
                icon: iconAlert,
                title: "Se actualizo la orden.",
            })
        } else {
            confirmOrder(total, cartItems);
            swalAlert({
                icon: iconAlert,
                title: "Se actualizo la orden.",
            })
        }
        cleanItems();
    }

    const handleCancel = () => {
        const orderEditingId = getOrderEditing();
        if(orderEditingId) {
            updateStatusOrder(orderEditingId, StatusOrder.OPEN)
            orderEditing(null);
        }
        cleanItems();
        handleClose();
    }
    
  return (
    <div 
        class='bg-white text-black h-screen sm:h-[95vh] sm:mt-5 p-6 sm:pt-2 rounded-lg shadow-md 
                flex flex-col justify-between'
                >  
        <div class="w-full flex flex-row-reverse mb-5" >
            <button 
                type="button" 
                class="cursor-pointer px-2 rounded-full hover:bg-gray-200 transition-colors" 
                onClick={handleClose}
                    >
                <FontAwesomeIcon  icon={faXmark}  />
            </button>
        </div>
        <div class="flex-auto overflow-auto">
            {
                cartItems &&
                cartItems.map( (listItem: CartItem) => (
                    <CartItems {...listItem} />
                ))
            }
        </div>
        <div class="border-t pt-4 mt-4">
            <div class="flex justify-between items-end mb-4 font-semibold">
                <span class="">Total:</span>
                <span class="text-3xl">${formatNumberWithCommas(total)}</span>
            </div>
            <div class='flex flex-col gap-2'>
                <button  
                    onClick={() => {handleConfirm(total, cartItems)}} 
                    class="bg-green-600 hover:bg-green-700 text-white place-content-center py-3 rounded-md transition-colors flex items-center gap-2"
                    >
                    Confirmar 
                    <FontAwesomeIcon class='text-2xl' icon={faCheck} />
                </button>
                <button 
                    onClick={() => handleCancel()}
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
