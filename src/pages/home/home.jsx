import Header from "../../components/header/Header";
import style from "./home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <section className={style.home_section}>
          <h1>Bem-vindo</h1>
          <div className={style.card_container}>
            <Link to="/book/store" className={style.card}>
              <p>Cadastrar livros</p>
            </Link>
            <Link to="/book/list" className={style.card}>
              <p>Listar livros</p>
            </Link>
            <Link to="/book/replacement" className={style.card}>
              <p>Trocar livros</p>
            </Link>
        </div>
      </section>
    </>
  );
}
