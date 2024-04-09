import Header from "./components/layout/Header";
import { gql, useQuery } from "@apollo/client";
import HomePage from "./components/Home/HomePage";
import Layout from "./components/layout/Layout";
import NotFound from "./components/Home/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BLogs from "./components/BLog/BLogs";
import BLogePage from "./components/BLog/BLogePage";
import Authors from "./components/authors/Authors";
import AuthorePage from "./components/authors/AuthorePage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blogs" element={<BLogs />} />
          <Route path="/blogs/:slug" element={<BLogePage />} />
          <Route path="/authors/:slug" element={<AuthorePage />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
