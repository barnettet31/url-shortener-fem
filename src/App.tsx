import { Route, Routes } from "react-router-dom";
import "./App.css";

import { NavWrapper } from "./components/navWrapper/navWrapper.component";
import { Company } from "./routes/company/company.route";
import { Features } from "./routes/features/features.route";
import { Home } from "./routes/home/home.route";
import { Pricing } from "./routes/pricing/pricing.route";
import { Resources } from "./routes/resources/resources.route";
function App() {
  return (
  <Routes>
    <Route element={<NavWrapper/>}>
      <Route  index={true} element={<Home isSignedIn={true}/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/company" element={<Company/>}/>
    </Route>
  </Routes>
  );
}

export default App;
