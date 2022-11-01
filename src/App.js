import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/common/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
