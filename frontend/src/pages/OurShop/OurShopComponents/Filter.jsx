import React from "react";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import styles from "../style.module.scss";
const Filter = () => {
  const { filter__container } = styles;
  return (
    <div>
      <div>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div>
          <TfiLayoutGrid4Alt style={{ fontSize: "20px" }} />
          <div
            style={{ height: "20px", width: "1px", backgroundColor: "#e1e1e1" }}
          />
          <TfiMenuAlt
            style={{
              fontSize: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
