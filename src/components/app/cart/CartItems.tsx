import { faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CartItems = () => {
  return (
    <div className="space-y-4 mb-2">
        <div
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
            <div>
            <h3 className="font-medium">{'Producto'}</h3>
                <p className="text-gray-600">
                    ${4000}
                </p>
            </div>
            <div className="flex items-center space-x-2">
                <span>{ 0 }</span>
                <button
                    className="px-1 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400"
                    >
                    <FontAwesomeIcon icon={faCircleMinus} size="xl" />
                </button>
            </div>
        </div>
    </div>
  )
}
