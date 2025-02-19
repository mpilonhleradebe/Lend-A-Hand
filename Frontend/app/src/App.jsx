import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Register from "./pages/Register";
import Workers from "./pages/Workers";
import { workerData } from "./utils/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUp";
import UserDesktop from "./pages/UserDesktop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workers" element={<Workers data={workerData} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/desktop" element={<UserDesktop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
