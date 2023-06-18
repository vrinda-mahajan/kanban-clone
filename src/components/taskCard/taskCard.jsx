import { Comments, Files, ThreeDots } from "../../assets/icons";
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
  const { priority, cardName, comments, files } = item;

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
          <img src={item.cardImg} />
        )}
      </div>
      <div className="taskcard-footer flex-r">
      <span className="taskcard-btn flex-r">
        <img alt="comments" src={Comments} />
        {comments} comments
      </span>
      <span className="taskcard-btn flex-r">
        <img alt="files" src={Files} /> {files} files
      </span>
      </div>
    </div>
  );
}
