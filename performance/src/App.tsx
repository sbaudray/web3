import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";

const Home = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/AboutPage"));
const Contact = lazy(() => import("./pages/ContactPage"));

export function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: 16,
          padding: 16,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<div style={{ fontSize: 32 }}>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
