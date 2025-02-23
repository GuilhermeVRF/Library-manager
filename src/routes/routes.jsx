import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/account/register/register";
import Account from "../pages/account/account";
import Login from "../pages/account/login/login";
import RegisterBook from "../pages/book/register/register-book";
import Book from "../pages/book/book";
import ListBooks from "../pages/book/list/ListBooks";

export default function RoutesControll() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Account />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="book" element={<Book/>}>
          <Route path="store" element={<RegisterBook />} />
          <Route path="list" element={<ListBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
