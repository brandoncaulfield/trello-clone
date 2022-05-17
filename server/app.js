const express = require("express");
var cors = require("cors");
const fs = require("fs");

const database = require("./board-data.json");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/ping", (req, res) => {
  res.json("pong");
});

/**
 * Get All boards
 */
app.get("/api/boards", (req, res) => {
  try {
    const data = fs.readFileSync("./server/board-data.json", "utf8");

    var dataParsed = JSON.parse(data);
    res.status(200).json(dataParsed);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * CRUD endpoint for a single board
 */
app.post("/api/board", (req, res) => {
  let operation = undefined;
  try {
    operation = req.body.operation;
  } catch (err) {
    res.json({ error: "Please provide an operation with your request" });
  }

  switch (operation) {
    case "create":
      // Create a board

      break;

    case "read":
      // Read a single board
      res.json(database.boards[1]);

      break;

    case "update":
      // Update a single board
      const id = undefined;
      try {
        id = req.body.id;
      } catch (err) {
        res.json({ error: "Please provide a board ID with your request" });
      }

      // Blanket update for now
      database.boards[id] = req.body.data;

      break;
    case "delete":
      // Delete a single board

      break;

    default:
      break;
  }
});

/**
 * CRUD endpoint for cards of a single board
 */
app.post("/api/board/card", (req, res) => {
  let operation = "";
  if (req.body.operation) {
    operation = req.body.operation;
  } else {
    res
      .status(400)
      .json({ error: "Please provide an operation with your request" });
  }

  try {
    const data = fs.readFileSync("./server/board-data.json", "utf8");

    var dataParsed = JSON.parse(data);

    res.status(200).json(boards);
  } catch (err) {
    console.error(err);
  }

  switch (operation) {
    case "create":
      // Create a new card
      if (req.body.id && req.body.data) {
        try {
          const { title, description, tasks } = { ...req.body.data };
          dataParsed.boards[req.body.id].cards[req.body.data.id] = {
            title: title,
            description: description,
            tasks: tasks,
          };
          try {
            fs.writeFileSync(
              "./server/board-data.json",
              JSON.stringify(dataParsed)
            );
            // file written successfully
          } catch (err) {
            res.status(500).json({ error: err });
          }
          res
            .status(200)
            .json(
              "Successfully created a new card and saved it to the database"
            );
        } catch (err) {
          res.status(500).json({ error: err });
        }
      }

      break;

    case "read":
      // Read a single card

      break;

    case "update":
      // Update a single card

      if (req.body.id && req.body.data) {
        try {
          const { title, description, tasks } = { ...req.body.data };
          dataParsed.boards[req.body.id].cards[req.body.data.id] = {
            title: title,
            description: description,
            tasks: tasks,
          };

          try {
            fs.writeFileSync(
              "./server/board-data.json",
              JSON.stringify(dataParsed)
            );
            // file written successfully
          } catch (err) {
            res.status(500).json({ error: err });
          }
          res
            .status(200)
            .json("Successfully updated card and saved it to the database");
        } catch (err) {
          res.status(500).json({ error: err });
        }
      }

      break;
    case "delete":
      // Delete a single card

      break;

    default:
      res.json({ requestBody: req.body });
      break;
  }
});

module.exports = app;
