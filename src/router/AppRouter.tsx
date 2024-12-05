import Router, { Route } from "preact-router"
import { HomePage, OrderPage } from "../pages"

export const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={HomePage}/>
      <Route path="/orders" component={OrderPage}/>
    </Router>
  )
}
