import { Routes, Route } from "react-router-dom";
import Brokerage from "pages/Brokerage";
import Darf from "pages/Darf";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Brokerage />} />
      <Route path="/Darf" element={<Darf />} />
    </Routes>
  );
}
