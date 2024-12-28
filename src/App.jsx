import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthRegister from "./pages/auth/Register";
import AuthLogin from "./pages/auth/Login";

function App() {
  
  return (
    <div className="flex flex-col overflow-hidden bg-white">
     <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="register" element={<AuthRegister />} />
        <Route path="login" element={<AuthLogin />}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
