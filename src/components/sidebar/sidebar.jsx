import {
  AddSquare,
  Category,
  Lamp,
  Message,
  Setting,
  Share,
  TaskSquare,
  ThreeDots,
} from "../../assets/icons";
import "./sidebar.css";

const sidebarItemsData = [
  { itemName: "Home", itemIcon: Category },
  { itemName: "Messages", itemIcon: Message },
  { itemName: "Tasks", itemIcon: TaskSquare },
  { itemName: "Members", itemIcon: Share },
  { itemName: "Settings", itemIcon: Setting },
];
const sidebarProjectsData = [
  { projectName: "Mobile App", color: "#7AC555", isSelected: true },
  { projectName: "Website Redesign", color: "#FFA500", isSelected: false },
  { projectName: "Design System", color: "#E4CCFD", isSelected: false },
  { projectName: "Wireframes", color: "#76A5EA", isSelected: false },
];

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-item-wrapper">
        {sidebarItemsData.map(({ itemName, itemIcon }, index) => {
          return (
            <li key={index} className="flex-r sidebar-items">
              <img src={itemIcon} alt="menu" />
              <p>{itemName}</p>
            </li>
          );
        })}
      </ul>
      <div className="project-section-wrapper">
        <div className="project-section-heading flex-r">
          <h4>My Projects</h4>
          <img src={AddSquare} />
        </div>
        {sidebarProjectsData.map(
          ({ projectName, color, isSelected }, index) => {
            return (
              <div
                key={index}
                className={`project-items flex-r ${
                  isSelected ? `project-selected` : ``
                }`}
              >
                <div className="flex-r">
                  <div
                    style={{ backgroundColor: color }}
                    className="circle"
                  ></div>
                  <h4
                    className={`project-name ${
                      isSelected ? `selected-project-name` : ``
                    }`}
                  >
                    {projectName}
                  </h4>
                </div>
                {isSelected ? <img src={ThreeDots} alt="more" /> : <></>}
              </div>
            );
          }
        )}
      </div>
      <div className="sidebar-footer flex-c flex-centre">
        <div className="lamp-container flex-centre">
          <img src={Lamp} alt="lamp" />
        </div>
        <h3 className="thought-box-heading">Thoughts Time</h3>
        <p className="thought-box-content">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <button className="thought-box-btn">Write a message</button>
      </div>
    </div>
  );
}
