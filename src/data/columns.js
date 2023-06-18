import { v4 as uuidv4 } from "uuid";
import { cardsDataFromBackend } from "./cards";

export const columnsFromBackend = {
  [uuidv4()]: {
    name: "To Do",
    items: cardsDataFromBackend.filter((item) =>
      item.column === "To Do" ? item : null
    ),
  },
  [uuidv4()]: {
    name: "On Progress",
    items: cardsDataFromBackend.filter((item) =>
      item.column === "On Progress" ? item : null
    ),
  },
  [uuidv4()]: {
    name: "Done",
    items: cardsDataFromBackend.filter((item) =>
      item.column === "Done" ? item : null
    ),
  },
};
