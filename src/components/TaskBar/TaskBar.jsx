import "./TaskBar.css";
import { useState } from "react";

function TaskBar() {
  const [active, setActive] = useState(false);
  return (
    <div className={`TaskBar ${active ? "active" : ""}`}>
      <img src="assets/images/logo.svg" alt="" />

      <button
        onClick={() => {
          setActive(true);
        }}
      >
        <img src="assets/images/icon-menu.svg" alt="" />
      </button>
      <ul className="paths">
        <button
          onClick={() => {
            setActive(false);
          }}
        >
          <img src="assets/images/icon-menu-close.svg" alt="" />
        </button>
        <li className="path">Home</li>
        <li className="path">New</li>
        <li className="path">Popular</li>
        <li className="path">Trending</li>
        <li className="path">Categories</li>
      </ul>
    </div>
  );
}

export default TaskBar;
