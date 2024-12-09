import { faCircleDollarToSlot, faFileInvoiceDollar, faSackDollar } from "@fortawesome/free-solid-svg-icons"
import { StatCard } from "../../components"

export const HomePage = () => {
  return (
    <div className="text-white">
        <div className="flex flex-row justify-center text-2xl gap-4">
            <StatCard
              title={'Total de Ventas para Corte'}
              stat={`$${0.00}`}
              icon={faSackDollar}
              twClass={'text-green-600'}
              />
            <StatCard
              title={'Cuentas abiertas'}
              stat={`10`}
              icon={faFileInvoiceDollar}
              twClass={'text-gray-600'}
              />
            <StatCard
              title={'Total de cuentas abiertas'}
              stat={`$${0.00}`}
              icon={faCircleDollarToSlot}
              twClass={'text-amber-600'}
              />
        </div>
    </div>
  )
}
