import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
