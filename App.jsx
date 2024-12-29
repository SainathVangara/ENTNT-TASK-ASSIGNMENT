import "./App.css";
import Admin from "./components/Admin";
import Calendar from "./components/Calendar";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
// import Overview from "./components/Overview";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/calendar" element={<Calendar />} />
        {/* <Route path="/overview" element={<Overview />} /> */}
      </Routes>
    </>
  );
}

export default App;
