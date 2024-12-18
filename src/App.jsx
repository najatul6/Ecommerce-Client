import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/userAuth/layout";
import SignIn from "./pages/userAuth/SignIn";
import SignUp from "./pages/userAuth/SignUp";
import AdminLayout from "./components/Admin-view/AdminLayout";
import AdminDashboard from "./pages/Admin-view/AdminDashboard";
import AdminProducts from "./pages/Admin-view/AdminProducts";
import AdminOrders from "./pages/Admin-view/AdminOrders";
import AdminFeatures from "./pages/Admin-view/AdminFeatures";
import UserLayout from "./components/user-view/UserLayout";
import NotFound from "./pages/NotFound/NotFound";
import UserHome from "./pages/User-view/UserHome";
import UserListing from "./pages/User-view/UserListing";
import Checkout from "./pages/User-view/Checkout";
import UserAccount from "./pages/User-view/UserAccount";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      
      <Routes>
        {/* Authentication */}
        <Route path="/userAuth" element={<AuthLayout />}>
          <Route path="singIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* User */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="home" element={<UserHome />} />
          <Route path="listing" element={<UserListing />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<UserAccount />} />
        </Route>
        
        {/* Not Found */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
