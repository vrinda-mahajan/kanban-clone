import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { columnsFromBackend } from "../../data/columns";
import "./main.css";

const handleOnDragEnd = (result, columns, setColumns) => {
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
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
              <div style={{ margin: 8 }}>
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="column-container"
                        style={{
                          background: snapshot.isDraggingOver ? "blue" : "grey",
                          padding: 4,
                          width: 250,
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
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      minHeight: 50,
                                      margin: 8,
                                      background: snapshot.isDragging
                                        ? "orange"
                                        : "red",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <h4>{item?.cardName}</h4>
                                  </div>
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
