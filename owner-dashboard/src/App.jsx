
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup.jsx"
import Login from "./components/login/Login.jsx"
import Home from './components/Home/Home.jsx';
import ReservationTable from './components/Home/ReservationTable.jsx';
import './App.css'
import RestaurantForm from './components/addRestaurant/RestaurantForm';
import ReservationHistory from "./components/Home/ReservationHistory.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/add-restaurant"
          element={<RestaurantForm />}
        />
        <Route
          path="/reservation-list"
          element={<ReservationTable />}
        />
        <Route
          path="/reservation-history"
          element={<ReservationHistory />}
        />
      </Routes>
    </Router>

  )
}

export default App
