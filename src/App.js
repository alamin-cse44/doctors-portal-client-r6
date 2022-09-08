import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Appointment from "./pages/Appointment/Appointment";
import RequireAuth from "./pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashborad from "./pages/Dashboard/Dashborad";
import MyApointments from "./pages/Dashboard/MyApointments";
import MyReview from "./pages/Dashboard/MyReview";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashborad />
            </RequireAuth>
          }
        >
          <Route index element={<MyApointments></MyApointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
