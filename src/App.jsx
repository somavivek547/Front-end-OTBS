import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Ticket from "./pages/Ticket";
import MyBookings from "./pages/MyBookings";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ManageEvents from "./admin/ManageEvents";
import ManageBookings from "./admin/ManageBookings";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Module */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/events" element={<Events />} />

<Route
  path="/booking/:id"
  element={
    <ProtectedRoute>
      <Booking />
    </ProtectedRoute>
  }
/>

<Route
  path="/payment"
  element={
    <ProtectedRoute>
      <Payment />
    </ProtectedRoute>
  }
/>

<Route
  path="/ticket/:id"
  element={
    <ProtectedRoute>
      <Ticket />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-bookings"
  element={
    <ProtectedRoute>
      <MyBookings />
    </ProtectedRoute>
  }
/>

        {/* Admin Module */}
        <Route path="/admin/login" element={<AdminLogin />} />
<Route
  path="/admin/dashboard"
  element={
    <AdminProtectedRoute>
      <AdminDashboard />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/events"
  element={
    <AdminProtectedRoute>
      <ManageEvents />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/bookings"
  element={
    <AdminProtectedRoute>
      <ManageBookings />
    </AdminProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;