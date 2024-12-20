import { faFileInvoice } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface FloatButtonProps {
  count: number;
  handleAction: () => void;
}

export const FloatButton = ({count, handleAction }: FloatButtonProps) => {
  return (
    <div class="fixed top-4 right-5" onClick={handleAction}>
      {
        count &&
        <div class="absolute rounded-full bg-red-600 -right-1 -top-1 text-center w-6">
            <span class="w-full p-1 text-sm">{count}</span>
        </div>
      }
      <button 
        type="button" 
        class="rounded-full bg-green-600 h-16 w-16"
        
      >
        <FontAwesomeIcon icon={faFileInvoice} size="2xl" />
      </button>
    </div>
  )
}
