import "./ActivityDropDownStyles.css";
import React, { useState } from "react";
import { EventDropDownMenu } from "../NavbarItems/MenuItems";
import { Link } from "react-router-dom";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "activity-submenu clicked" : "activity-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {EventDropDownMenu.map((item, index) => (
          <React.Fragment key={item.id}>
            <li>
              <Link
                to={item.url}
                className={item.CName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
            {/* Show divider after the first item only */}
            {index === 0 && <li className="divider-line" />}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;
