import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { columnsFromBackend } from "../../data/columns";
import "./main.css";
import TaskCard from "../taskCard/taskCard";

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
    <div className="flex-r main-wrapper">
      <DragDropContext
        onDragEnd={(result) => handleOnDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div className="flex-c column-wrapper" key={id}>
              <div className={`column-heading ${identifyColumn(column.name)}`}>
                <div></div>
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
  );
}
