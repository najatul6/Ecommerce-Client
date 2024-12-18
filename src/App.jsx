import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/userAuth/layout"
import SignIn from "./pages/userAuth/SignIn"
import SignUp from "./pages/userAuth/SignUp"


function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Common Component */}
      <Routes>
        <Route path="/userAuth" element={<AuthLayout/>}>
        <Route path="singIn" element={<SignIn/>}/>
        <Route path="signUp" element={<SignUp/>}/>
        </Route>
      </Routes>
    
    </div>
  )
}

export default App
