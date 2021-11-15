import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
