import Router, { Route } from "preact-router"
import { HomePage } from "../pages"

export const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={HomePage}/>
    </Router>
  )
}
