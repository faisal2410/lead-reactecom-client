import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard/user",
  },
  {
    title: "Search Subject",
    icon: <BiImageAdd />,
    path: "/searchprogram",
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/dashboard/user/profile",
      },
      // {
      //   title: "Edit Profile",
      //   path: "/profile-update",
      // },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;