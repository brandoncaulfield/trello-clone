const axios = require("axios");

/**
 * Get all boards
 * @returns []
 */
export const getBoards = async () => {
  try {
    const response = await axios("http://localhost:3002/api/boards");
    const keys = Object.keys(response.data.boards);
    const dataArray = keys.map((key: any) => {
      return { id: key, ...response.data.boards[key] };
    });
    return dataArray;
  } catch (err: any) {
    console.log(err);
  }
};

/**
 * Adds a single board to the collection
 * @param board
 * @returns
 */
export const addBoard = async (board: {}) => {
  const options = {
    method: "POST",
    headers: {
      Accepts: "aplication/json",
      "Content-Type": "application/json",
    },
    data: board,
  };

  try {
    const response = await axios("/api/addBoard", options);
    return response.data;
  } catch (err) {
    throw Error("Error adding board");
  }
};
