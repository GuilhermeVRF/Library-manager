import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import style from './home.module.css';
import React from "react";
import Card from "../../components/card-home/card";

export default function Home() {
  return (
    <>
      <Header />
      <section className={style.home_section}>
        <h1>TROCA DE LIVROS</h1>
        <div className={style.container_card}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </section>
    </>
  );
}
