import { faCircleDollarToSlot, faFileInvoiceDollar, faSackDollar } from "@fortawesome/free-solid-svg-icons"
import { StatCard } from "../../components"
import { StatusOrder } from "../../interfaces"
import { useOrderStore } from "../../stores"
import { formatNumberWithCommas } from "../../helpers/utilities"

export const HomePage = () => {

  const openOrders      = useOrderStore(state => state.getCountOrders(StatusOrder.OPEN))
  const totalOpenOrders = useOrderStore(state => state.getTotalOrders(StatusOrder.OPEN))
  const totalSales      = useOrderStore(state => state.getTotalOrders(StatusOrder.DONE))

  return (
    <div className="text-white">
        <div className="flex flex-row flex-wrap justify-center text-2xl gap-4">
            <StatCard
              title={'Total de Ventas'}
              stat={`$${formatNumberWithCommas(totalSales)}`}
              icon={faSackDollar}
              twClass={'text-green-600'}
              />
            <StatCard
              title={'Cuentas abiertas'}
              stat={openOrders}
              icon={faFileInvoiceDollar}
              twClass={'text-gray-600'}
              />
            <StatCard
              title={'Total de cuentas abiertas'}
              stat={`$${formatNumberWithCommas(totalOpenOrders)}`}
              icon={faCircleDollarToSlot}
              twClass={'text-amber-600'}
              />
        </div>
    </div>
  )
}
