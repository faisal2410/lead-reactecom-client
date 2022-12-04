import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiProductHuntLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import menu from "../../staticData/sidbar";
import SidebarItem from "./SideBarItem";
import "./sidebar.css";

const UserMenu=()=> {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);



  return (
    <>
      <div className="p-3 mt-2 mb-2 h4 bg-light">User Links</div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item" to="/dashboard/user/profile">
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/dashboard/user/orders">
            Orders
          </NavLink>
        </li>
      </ul>
{/* ========Testing Code =================================== */}


<div className="top_section">
<div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <RiProductHuntLine size={35} style={{ cursor: "pointer" }} />
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>

</div>
<div>
{menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}

</div>


    </>
  );
}

export default UserMenu;
