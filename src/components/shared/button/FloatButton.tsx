import { faFileInvoice } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FloatButton = ({ handleAction }: { handleAction: () => void }) => {
  return (
    <div class="fixed top-4 right-5" onClick={handleAction}>
      <button 
        type="button" 
        class="rounded-full bg-green-600 h-16 w-16"
        
      >
        <FontAwesomeIcon icon={faFileInvoice} size="2xl" />
      </button>
    </div>
  )
}
