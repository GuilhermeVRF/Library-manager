import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import style from './book.module.css';
import React from "react";

export default function Book() {
  return (
    <>
      <Header />
      <section className={style.book_section}>
        <Outlet />
      </section>
    </>
  );
}
