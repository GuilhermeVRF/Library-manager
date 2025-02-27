import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Register from "../pages/account/register/register";
import Account from "../pages/account/account";
import Login from "../pages/account/login/login";
import RegisterBook from "../pages/book/register/register-book";
import Book from "../pages/book/book";
import ListBooks from "../pages/book/list/ListBooks";
import Home from "../pages/home/home";
import Replace from "../pages/book/replacement/replacement";
import ProtectedRoute from "../components/protected-route/ProtectedRoute";

export default function RoutesControll() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Account />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Navigate to="/login" />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="book" element={<Book/>}>
            <Route path="store" element={<RegisterBook />} />
            <Route path="list" element={<ListBooks />} />
            <Route path="replacement" element={<Replace />} />
          </Route>
          <Route path="home" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
