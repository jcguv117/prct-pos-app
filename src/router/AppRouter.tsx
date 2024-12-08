import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, OrderPage } from "../pages"

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </Router>
  )
}
