// import React, { useEffect, useState } from "react";
// import { useAuth } from "../../context/auth";
// // import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Card from "./ProfileCard";
// import Loader from "../loader/loader";
// // import { selectUser } from "../../redux/features/auth/authSlice";
// import "./profile.css";
// import toast from "react-hot-toast";
// import { updateUser } from "../../services/authService";
// import ChangePassword from "../../components/changePassword/ChangePassword";

// const EditProfile = () => {
//   // context
//   const [auth, setAuth] = useAuth();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   // state
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [id,setId]=useState(null);
//   const [phone,setPhone]=useState("");
//   const [bio,setBio]=useState(null);
//   const [photo, setPhoto] = useState("");
//   // const user = useSelector(selectUser);
//   // const { email } = auth?.user;

//   useEffect(() => {
//     if (!auth?.user) {
//       navigate("/dashboard/user/profile");
//     }else{
//       const {_id, firstName,lastName, email, address,phone,bio } = auth.user;
//       setFirstName(firstName);
//       setLastName(lastName);
//       setEmail(email);
//       setAddress(address);
//       setIsLoading(false);
//       setId(_id)
//       setPhone(phone);
//       setBio(bio);
//       setAddress(address)
//     }
//   }, [email, navigate]);
  

//   // const initialState = {
//   //   name: user?.name,
//   //   email: user?.email,
//   //   phone: user?.phone,
//   //   bio: user?.bio,
//   //   photo: user?.photo,
//   // };
//   // const [profile, setProfile] = useState(initialState);
  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setProfileImage(e.target.files[0]);
//   };

//   const saveProfile = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       // Handle Image upload
//       let imageURL;
//       if (
//         profileImage &&
//         (profileImage.type === "image/jpeg" ||
//           profileImage.type === "image/jpg" ||
//           profileImage.type === "image/png")
//       ) {
//         const image = new FormData();
//         image.append("file", profileImage);
//         image.append("cloud_name", "zinotrust");
//         image.append("upload_preset", "wk66xdkq");

//         // First save image to cloudinary
//         const response = await fetch(
//           "https://api.cloudinary.com/v1_1/zinotrust/image/upload",
//           { method: "post", body: image }
//         );
//         const imgData = await response.json();
//         imageURL = imgData.url.toString();

//         // Save Profile
//         const formData = {
//           name: profile.name,
//           phone: profile.phone,
//           bio: profile.bio,
//           photo: profileImage ? imageURL : profile.photo,
//         };

//         const data = await updateUser(formData);
//         console.log(data);
//         toast.success("User updated");
//         navigate("/profile");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="profile --my2">
//       {isLoading && <Loader />}

//       <Card cardClass={"card --flex-dir-column"}>
//         <span className="profile-photo">
//           <img src={photo} alt="profilepic" />
//         </span>
//         <form className="--form-control --m" onSubmit={saveProfile}>
//           <span className="profile-data">
//             <p>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={profile?.name}
//                 onChange={handleInputChange}
//               />
//             </p>
//             <p>
//               <label>Email:</label>
//               <input type="text" name="email" value={profile?.email} disabled />
//               <br />
//               <code>Email cannot be changed.</code>
//             </p>
//             <p>
//               <label>Phone:</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={profile?.phone}
//                 onChange={handleInputChange}
//               />
//             </p>
//             <p>
//               <label>Bio:</label>
//               <textarea
//                 name="bio"
//                 value={profile?.bio}
//                 onChange={handleInputChange}
//                 cols="30"
//                 rows="10"
//               ></textarea>
//             </p>
//             <p>
//               <label>Photo:</label>
//               <input type="file" name="image" onChange={handleImageChange} />
//             </p>
//             <div>
//               <button className="--btn --btn-primary">Edit Profile</button>
//             </div>
//           </span>
//         </form>
//       </Card>
//       <br />
//       <ChangePassword />
//     </div>
//   );
// };

// export default EditProfile;