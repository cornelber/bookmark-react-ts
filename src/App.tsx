import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <Header /> {/* Header placed outside of Routes to prevent re-rendering */}
      
      {/* Suspense for handling the loading state of lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
