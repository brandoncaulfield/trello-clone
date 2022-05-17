// Next.js
import Image from "next/image";

// Components
import Layout from "../components/Layout";
import SimpleCard from "../components/SimpleCard";

// React query
import { useQuery } from "react-query";

// Mui
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

export default function Board() {
  const query = useQuery("repoData", () =>
    fetch("http://localhost:3002/api/board", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        operation: "read",
        id: "1",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data: { name: string; cards: any }) => {
        let newData = { name: data["name"], cards: [{}] };
        newData.cards = [
          {
            id: "1",
            title: "To Do",
            description: "Stuff to do",
            tasks: ["task1", "task2", "task3"],
          },
          {
            id: "2",
            title: "Doing",
            description: "Stuf we're working on",
            tasks: ["task1", "task2", "task3"],
          },
          {
            id: "3",
            title: "Done",
            description: "Stuff thats complete",
            tasks: ["task1", "task2", "task3"],
          },
        ];

        const cardKeys = Object.keys(data.cards);
        // let cardData = cardKeys.map((key: string) => {
        //   return data.cards[key];
        // });
        return newData;
      })
      .catch((error) => {
        throw error;
      })
  );

  if (query.data) {
    return (
      <Layout>
        <main className={styles.main}>
          {/* <>
            <p>{JSON.stringify(query.data.cards)}</p>
            {query.data.cards.map((card: any) => (
              <p>{JSON.stringify(card)}</p>
            ))}
          </> */}
          <div>
            <>
              <h1>{query.data.name}</h1>
            </>
          </div>
          <Grid container spacing={2}>
            {query.data.cards.map((card: any) => (
              <Grid key={card.id} item>
                <SimpleCard {...card} />
              </Grid>
            ))}
          </Grid>
          <Grid sx={{ padding: 2 }} container spacing={2}>
            <Grid item>
              <Button variant="contained">Add Card +</Button>
            </Grid>
          </Grid>
        </main>
        <Image
          src="/board_background.png"
          alt="background"
          layout="fill"
          priority
          className={styles.background_image}
          objectFit="cover"
          objectPosition="center"
        ></Image>
      </Layout>
    );
  }

  // if (query.isError) {
  //   <span>An error occured with react query</span>;
  // }

  return <span>Loading...</span>;
}
