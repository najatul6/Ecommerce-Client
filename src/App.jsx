import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthRegister from "./pages/auth/Register";
import AuthLogin from "./pages/auth/Login";
import AdminLayout from "./components/admin-view/layout";

function App() {
  
  return (
    <div className="flex flex-col overflow-hidden bg-white">
     <Routes>


      <Route path="/auth" element={<AuthLayout />}>
        <Route path="register" element={<AuthRegister />} />
        <Route path="login" element={<AuthLogin />}/>
      </Route>

      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="dashboard" element={<div>Dashboard</div>}/>
        <Route path="products" element={<div>Products</div>}/>
        <Route path="orders" element={<div>Orders</div>}/>
        <Route path="customers" element={<div>Customers</div>}/>

      </Route>
     </Routes>
    </div>
  );
}

export default App;
