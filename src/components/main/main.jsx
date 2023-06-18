import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { columnsFromBackend } from "../../data/columns";
import "./main.css";
import TaskCard from "../taskCard/taskCard";
import {
  ArrowDown,
  Calendar,
  Edit,
  Filter,
  Link,
  Menu,
  Pause,
  Plus,
  Share,
} from "../../assets/icons";
import MultipleAvatars from "../multipleAvatars/multipleAvatars";
import { DummyUser, User1, User2, User3, User4 } from "../../assets/images";

const handleOnDragEnd = (result, columns, setColumns) => {
  console.log(result);
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    let [removed] = sourceItems.splice(source.index, 1);
    console.log(destColumn, removed);
    // if(destColumn.name === "Done"){
    // removed = { ...removed, priority: "Completed" };
    // }else{
    // }
    removed = { ...removed, column: destColumn.name };
    destItems.splice(destination.index, 0, removed);
    console.log("destItems", destItems);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const sourceColumn = columns[source.droppableId];
    const sourceItems = [...sourceColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    sourceItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
    });
  }
};

const identifyColumn = (name) => {
  console.log(name);
  switch (name) {
    case "To Do":
      return "main-to-do";
    case "On Progress":
      return "main-on-progress";
    case "Done":
      return "main-done";
    default:
      break;
  }
};
export default function Main() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div className="flex-c main-wrapper">
      <div className="main-heading-wrapper">
        <div className="main-heading flex-r">
          <div className="main-heading-left flex-r">
            <h1>Mobile App</h1>
            <div className="main-heading-left-icon">
              <img src={Edit} alt="edit" />
            </div>
            <div className="main-heading-left-icon">
              <img src={Link} alt="link" />
            </div>
          </div>
          <div className="main-heading-right flex-r">
            <span className="invite-btn flex-centre">
              <div className="flex-centre main-heading-right-icon">
                <img src={Plus} alt="invite" />
              </div>
              Invite
            </span>
            <MultipleAvatars
              users={[User1, User2, User3, User4, DummyUser]}
              reversed={false}
              size={"medium"}
            />
          </div>
        </div>
        <div className="main-btns-wrapper flex-r">
          <div className="main-btns-left flex-r">
            <button className="main-btns flex-r">
              <img src={Filter} alt="filter" />
              <p>Filter</p>
              <img src={ArrowDown} alt="arrow-down" />
            </button>
            <button className="main-btns flex-r">
              <img src={Calendar} alt="calendar" />
              <p>Today</p>
              <img src={ArrowDown} alt="arrow-down" />
            </button>
          </div>
          <div className="flex-r main-btns-right">
            <button className="main-btns flex-r">
              <img src={Share} alt="share" />
              <p>Share</p>
            </button>
            <div className="vertical-line"></div>
            <div className="main-pause-btn flex-centre">
              <img src={Pause} alt="pause" />
            </div>
            <img className="main-menu-icon" src={Menu} alt="menu" />
          </div>
        </div>
      </div>
      <div className="flex-r main-column-section">
        <DragDropContext
          onDragEnd={(result) => handleOnDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([id, column]) => {
            return (
              <div className="flex-c column-wrapper" key={id}>
                <div
                  className={`column-heading ${identifyColumn(column.name)}`}
                >
                  <div className="circle"></div>
                  <h2 className="column-name">{column.name}</h2>
                  <h4 className="flex-centre column-count">
                    {column.items.length}
                  </h4>
                </div>
                <div className="droppable-area-wrapper">
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="droppable-area-container"
                          style={{
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                draggableId={item?.id}
                                key={item?.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <TaskCard
                                      provided={provided}
                                      snapshot={snapshot}
                                      item={item}
                                    />
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}
