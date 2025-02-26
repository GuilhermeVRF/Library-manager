import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import style from './account.module.css';
import React from "react";

export default function Account() {
  return (
    <>
      <Header />
      <section className={style.account_section}>
        <Outlet />
      </section>
    </>
  );
}
