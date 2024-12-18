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
import CheckAuth from "./components/common/CheckAuth";
import UnAuthPage from "./pages/UnAuthPage/UnAuthPage";

function App() {
  const isAuthenticated = false;
  const user = {
    name:"Najatul islam",
    role: "user",
  }
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Authentication */}
        <Route
          path="/userAuth"
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
          path="/user"
          element={
            <CheckAuth>
              <UserLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<UserHome />} />
          <Route path="listing" element={<UserListing />} />
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
