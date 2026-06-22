import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"

import Home from "@/pages/Home"
import ConnectUs from "@/pages/ConnectUs"
import GetApp from "@/pages/GetApp"
import NotFound from "@/pages/NotFound"

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<ConnectUs />} />
        <Route path="/get-app" element={<GetApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
export { App }
