import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavWrapper } from "./components/navWrapper/navWrapper.component";
import { Features } from "./routes/features/features.route";
import { Home } from "./routes/home/home.route";
import { Pricing } from "./routes/pricing/pricing.route";
import { Resources } from "./routes/resources/resources.route";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <HashRouter>
  <Routes>
    <Route element={<NavWrapper/>}>
      <Route  index={true} element={<Home isSignedIn={isSignedIn}/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/resources" element={<Resources/>}/>
    </Route>
  </Routes></HashRouter>
  );
}

export default App;
