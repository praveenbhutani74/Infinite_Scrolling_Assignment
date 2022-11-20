import "./App.css";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { ChatState } from "./components/context/ContextApi";
import ProtectedRoute from "./components/route/ProtectedRoute";

function App() {
  const { isLogged } = ChatState();

  console.log(isLogged);
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route exact path="/" element={<Home />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
