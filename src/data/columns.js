import { v4 as uuidv4 } from "uuid";
import { cardsDataFromBackend } from "./cards";

export const columnsFromBackend = {
  [uuidv4()]: {
    name: "To do",
    items: cardsDataFromBackend.filter((item) =>
      item.column === "to-do" ? item : null
    ),
  },
  [uuidv4()]: {
    name: "On Progress",
    items: cardsDataFromBackend.filter((item) =>
      item.column === "on-progress" ? item : null
    ),
  },
  [uuidv4()]: {
    name: "Done",
    items: cardsDataFromBackend.filter((item) =>
      item.column === "done" ? item : null
    ),
  },
};
