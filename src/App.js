import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Page/HomePage/HomePage";
import AboutPage from "./Page/AboutUsPage/AboutPage";
import ServicesPage from "./Page/ServicesPage/ServicesPage";

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
          <Route
            path='/aboutUs'
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path='/servicesPage'
            element={
              <Layout>
                <ServicesPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
