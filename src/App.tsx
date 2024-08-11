import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="*" element={<h1>404 NOT FOUND !</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
