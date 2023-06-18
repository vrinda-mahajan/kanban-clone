import {
  MobileAppImg,
  MoodboardImg,
  OnBoardingImg,
} from "../assets/images/index";
import { v4 as uuidv4 } from "uuid";

export const cardsDataFromBackend = [
  {
    id: uuidv4(),
    cardName: "Brainstorming",
    cardDescription:
      "Brainstorming brings team members' diverse experience into play.",
    priority: "Low",
    comments: 12,
    files: 0,
    column: "to-do",
  },
  {
    id: uuidv4(),
    cardName: "Research",
    cardDescription:
      "User research helps you to create an optimal product for users.",
    priority: "High",
    comments: 10,
    files: 3,
    column: "to-do",
  },
  {
    id: uuidv4(),
    cardName: "Wireframes",
    cardDescription:
      "Low fidelity wireframes include the most basic content and visuals.",
    priority: "High",
    comments: 8,
    files: 5,
    column: "to-do",
  },
  {
    id: uuidv4(),
    cardName: "Onboarding Illustrations",
    cardImg: OnBoardingImg,
    priority: "Low",
    comments: 14,
    files: 15,
    column: "on-progress",
  },
  {
    id: uuidv4(),
    cardName: "Moodboard",
    cardImg: MoodboardImg,
    priority: "Low",
    comments: 9,
    files: 10,
    column: "on-progress",
  },
  {
    id: uuidv4(),
    cardName: "Mobile App Design",
    cardImg: MobileAppImg,
    priority: "Completed",
    comments: 12,
    files: 15,
    column: "done",
  },
  {
    id: uuidv4(),
    cardName: "Design System",
    cardDescription: "It just needs to adapt the UI from what you did before ",
    priority: "Completed",
    comments: 12,
    files: 15,
    column: "done",
  },
];
