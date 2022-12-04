import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import UserMenu from "../../components/nav/UserMenu";
import axios from "axios";
import toast from "react-hot-toast";

const UserProfile=()=> {
  // context
  const [auth, setAuth] = useAuth();
  
  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  // const [id,setId]=useState("");
  const [phone,setPhone]=useState("");
  const [bio,setBio]=useState("");
  const [updatePhoto,setUpdatePhoto]= useState(true);

  useEffect(() => {
    if (auth?.user) {
      const {_id, firstName,lastName, email, address,phone,bio,photo } = auth.user;
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setAddress(address);
      // setId(_id);
      setPhone(phone);
      setBio(bio);
      setProfilePhoto(photo);    
    }
  }, [auth?.user]);
  console.log("profile photo check",profilePhoto)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const profileData = new FormData();
     profilePhoto && profileData.append("photo", profilePhoto);     
      profileData.append("firstName", firstName);
      profileData.append("lastName", lastName);
      profileData.append("address", address);    
      profileData.append("bio", bio); 
      // profileData.append("password", password); 
      profileData.append("email", email); 
      profileData.append("phone", phone); 

      const { data } = await axios.put("/profile", profileData);

      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data });
        // local storage update
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile updated");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron title={`Hello ${auth?.user?.firstName} ${auth?.user?.lastName}`} subTitle="Dashboard" />
      {/* {JSON.stringify(auth?.user,null,4)} */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Profile</div>
            {/* {profilePhoto ? (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="profilepic"
                  className="img img-responsive"
                  height="200px"
                />
              </div>
            ) : (
              <div className="text-center">
                <img
                  src={`${process.env.REACT_APP_API}/profile/photo/${auth?.user?._id}`}
                  alt="profilepic "
                  className="img img-responsive"
                  height="200px"
                
                />
              </div>
            )} */}

             <div className="text-center">
                <img
                  src={`${process.env.REACT_APP_API}/profile/photo/${auth?.user?._id}`}
                  alt="profilepic "
                  className="img img-responsive"
                  height="200px"
                
                />
              </div> 

            <form onSubmit={handleSubmit}>
            
          
            <div className="pt-5">
              <label className="btn btn-outline-secondary col-12 mb-3">
                {/* {profilePhoto ? profilePhoto.name : "Upload photo"} */}
             {/* Upload Photo */}
             {updatePhoto?"Upload Photo":profilePhoto.name}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => {
                    setProfilePhoto(e.target.files[0])
                    setUpdatePhoto(false)                    
                    }}
                  hidden
                />
              </label>
            </div>
              <input
                type="text"
                className="form-control m-2 p-2"
                placeholder="Enter your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus={true}
              />
              <input
                type="text"
                className="form-control m-2 p-2"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoFocus={true}
              />

              <input
                type="email"
                className="form-control m-2 p-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={true}
              />

              {/* <input
                type="password"
                className="form-control m-2 p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={true}
              /> */}

              <textarea
                className="form-control m-2 p-2"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
               <input
                type="text"
                className="form-control m-2 p-2"
                placeholder="Edit your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus={true}
              />
               <input
                type="text"
                className="form-control m-2 p-2"
                placeholder="Edit your Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                autoFocus={true}
              />

              <button disabled={updatePhoto}  className="btn btn-primary m-2 p-2">Edit Profile</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
