import { BrowserRouter, Route, Routes } from "react-router-dom"

import Notes from "./pages/Notes"
import Home from "./pages/Home"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/login" element={<Login />} />
          <Route path="/notes/admindashboard" element={<AdminDashboard />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
