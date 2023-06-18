import { Comments, Files, ThreeDots } from "../../assets/icons";
import MultipleAvatars from "../multipleAvatars/multipleAvatars";
import "./taskCard.css";
const getClassForPriorityChip = (priority) => {
  switch (priority) {
    case "Low":
      return "priority-chip-low";
    case "High":
      return "priority-chip-high";
    case "Completed":
      return "priority-chip-completed";
    default:
      break;
  }
};
export default function TaskCard({ provided, snapshot, item }) {
  const { priority, cardName, comments, files, users } = item;

  return (
    <div
      className="task-card-wrapper"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        ...provided.draggableProps.style,
      }}
    >
      <div className="priority-chip-wrapper">
        <span className={`priority-chip ${getClassForPriorityChip(priority)}`}>
          {priority}
        </span>
        <img alt="more" src={ThreeDots} />
      </div>

      <h4 className="taskcard-name">{cardName}</h4>
      <div>
        {item.cardDescription ? (
          <p className="taskcard-description">{item.cardDescription}</p>
        ) : (
          <img className="taskcard-img" src={item.cardImg} alt="card-img" />
        )}
      </div>
      <div className="taskcard-footer flex-r">
        <MultipleAvatars users={users} reversed={true} size={"small"} />
        <div className="taskcard-btns-wrapper flex-r">
          <span className="taskcard-btns flex-r">
            <img alt="comments" src={Comments} />
            <p>
              {comments} <span>comments</span>
            </p>
          </span>
          <span className="taskcard-btns flex-r">
            <img alt="files" src={Files} />{" "}
            <p>
              {files} <span>files</span>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
