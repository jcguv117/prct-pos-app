import { SideBar } from "../components"
import { AppRouter } from "../router/AppRouter"

export const AppLayout = () => {
  return (
    <div class="h-screen flex">
        <div>
            <SideBar />
        </div>
        <div>
            <AppRouter />
        </div>

    </div>
  )
}
