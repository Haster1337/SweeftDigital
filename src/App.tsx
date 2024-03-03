import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/history" Component={History} />
      </Routes>
    </>
  );
}

export default App;
