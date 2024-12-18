import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/userAuth/layout"
import Login from "./pages/userAuth/Login"
import Register from "./pages/userAuth/Register"


function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Common Component */}
      <Routes>
        <Route path="/userAuth" element={<AuthLayout/>}>
        <Route path="/singIn" element={<Login/>}/>
        <Route path="/signUp" element={<Register/>}/>
        </Route>
      </Routes>
    
    </div>
  )
}

export default App
