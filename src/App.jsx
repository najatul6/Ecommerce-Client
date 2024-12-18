import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/userAuth/layout"


function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Common Component */}
      <Routes>
        <Route path="/userAuth" element={<AuthLayout/>}>
        <Route path="/singIn"/>
        <Route/>
        </Route>
      </Routes>
    
    </div>
  )
}

export default App
