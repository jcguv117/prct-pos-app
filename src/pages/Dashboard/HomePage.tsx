import { StatCard } from "../../components"

export const HomePage = () => {
  return (
    <div className="text-white">
        <div className="flex flex-row justify-center text-2xl gap-4">
            <StatCard
              title={'Total de Ventas para Corte'}
              stat={`$${0.00}`}
              twClassIcon={'fill-green-600'}
              />
            <StatCard
              title={'Cuentas abiertas'}
              stat={`10`}
              twClassIcon={'fill-gray-600'}
              />
            <StatCard
              title={'Total de cuentas abiertas'}
              stat={`$${0.00}`}
              twClassIcon={'fill-amber-600'}
              />
        </div>
    </div>
  )
}
