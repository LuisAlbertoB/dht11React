import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} > </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;