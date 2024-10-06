import { Navigate, Route, Routes } from "react-router-dom";
import Composition from "../pages/composition/Composition";
import Elements from "../pages/elements/Elements";
import LandingPage from "../pages/landing/LandingPage";
import NestedRoutes from "../pages/nested-routes/NestedRoutes";
import Apple from "../pages/nested-routes/Apple";
import Orange from "../pages/nested-routes/Orange";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<LandingPage />} />
      <Route path="composition" element={<Composition />} />
      <Route path="elements" element={<Elements />} />
      <Route path="nested-routes" element={<NestedRoutes />}>
        {/* <Route index element={<Apple />} /> */}
        <Route index element={<Navigate to="apple" />} />
        <Route path="apple" element={<Apple />} />
        <Route path="orange" element={<Orange />} />
      </Route>
    </Routes>
  );
}
