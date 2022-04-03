import { Routes, Route } from "react-router-dom";
import Brokerage from "pages/Brokerage";
import Darf from "pages/Darf";
import CostShare from "pages/CostShare";
import GainCapital from "pages/GainCapital";
import Offshore from "pages/Offshore";
import TaxIncome from "pages/TaxIncome";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Brokerage />} />
      <Route path="/CostShare" element={<CostShare />} />
      <Route path="/Darf" element={<Darf />} />
      <Route path="/GainCapital" element={<GainCapital />} />
      <Route path="/Offshore" element={<Offshore />} />
      <Route path="/TaxIncome" element={<TaxIncome />} />
    </Routes>
  );
}
