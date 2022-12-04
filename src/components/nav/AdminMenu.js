import { NavLink } from "react-router-dom";

const AdminMenu=()=> {
  return (
    <>
      <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Links</div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/studyArea">
            Create Study Area
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/subject">
            Create Subject
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/subjects">
            Subjects
          </NavLink>
        </li>
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/universityView">
            University Details
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/orders">
            Manage orders
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default AdminMenu;
