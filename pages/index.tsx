// Next.js
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// API
import { getBoards } from "../API/BoardAPI";

// react-query
import { useQuery } from "react-query";

// Context
import { useAppContext } from "../context/BoardContext";

// Components
import AddBoardForm from "../components/AddBoardForm";

// CSS
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const boardContext = useAppContext();

  const { board, cards } = boardContext;

  const [boardData, setBoardData] = board;
  const [cardData, setCardData] = cards;

  const query: any = useQuery("boards", getBoards);

  const onBoardClick = async () => {
    // Eventually set single board context
  };

  if (query.data) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Trello Clone</title>
          <meta name="description" content="Trello Clone" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to your Trello.clone workspace
          </h1>

          <p className={styles.description}>
            Get started by creating or accessing a board below
          </p>

          <div className={styles.grid}>
            {query.data.map((board: any) => {
              return (
                <Link href="/board">
                  <div className={styles.card} onClick={onBoardClick}>
                    <h2>{board.name}</h2>
                    <p>{board.description}</p>
                  </div>
                </Link>
              );
            })}

            <div className={styles.card}>
              <h2>Add a Board +</h2>
              <AddBoardForm />
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          All Rights reserved | Trello Clone
        </footer>
      </div>
    );
  }
  if (query.isLoading) {
    return <span>Loading...</span>;
  }

  if (query.isError) {
    return <span>Error Occured</span>;
  }

  return <span>Nothing</span>;
};

export default Home;
