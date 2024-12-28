import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  
  return (
    <div className="flex flex-col overflow-hidden bg-white">
     <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
