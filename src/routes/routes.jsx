import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/account/register/register";
import Account from "../pages/account/account";

export default function RoutesControll() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Account />}>
          <Route path="/register" element={<Register />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}
