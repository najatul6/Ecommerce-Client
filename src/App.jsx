import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AdminLayout from "./components/Admin-view/AdminLayout";
import AdminDashboard from "./pages/Admin-view/AdminDashboard";
import AdminProducts from "./pages/Admin-view/AdminProducts";
import AdminOrders from "./pages/Admin-view/AdminOrders";
import AdminFeatures from "./pages/Admin-view/AdminFeatures";
import NotFound from "./pages/NotFound/NotFound";
import Checkout from "./pages/ShoppingView/Checkout";
import UserAccount from "./pages/ShoppingView/UserAccount";
import CheckAuth from "./components/common/CheckAuth";
import UnAuthPage from "./pages/UnAuthPage/UnAuthPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ShoppingLayout from "./components/ShoppingView/ShoppingLayout";
import ShoppingHome from "./pages/ShoppingView/Home";
import ProductListing from "./pages/ShoppingView/ProductListing";

function App() {
  const isAuthenticated = true;
  const user = {
    name:"Najatul",
    role:"user"
  };
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Authentication */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
        {/* Admin */}
        <Route
          path="/admin"
          element={
            <CheckAuth>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* User */}
        <Route
          path="/shop"
          element={
            <CheckAuth>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ProductListing />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<UserAccount />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
        <Route path="/un-authorization" element={<UnAuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
