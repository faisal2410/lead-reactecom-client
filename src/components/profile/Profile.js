import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./ProfileCard";
import { SpinnerImg } from "../loader/loader";
// import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
// import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
// import { getUser } from "../../services/authService";
import "./profile.css";

const Profile = () => {
  // useRedirectLoggedOutUser("/login");
  // const dispatch = useDispatch();

  // context
  const [auth, setAuth] = useAuth();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [id,setId]=useState(null);
  const [phone,setPhone]=useState("");
  const [bio,setBio]=useState(null);

  // useEffect(() => {
  //   console.log("Getting use");
  //   setIsLoading(true);
  //   async function getUserData() {
  //     const data = await getUser();
  //     console.log(data);

  //     setProfile(data);
  //     setIsLoading(false);
  //     await dispatch(SET_USER(data));
  //     await dispatch(SET_NAME(data.name));
  //   }
  //   getUserData();
  // }, [dispatch]);

  useEffect(() => {
    if (auth?.user) {
      const {_id, firstName,lastName, email, address,phone,bio } = auth.user;
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setAddress(address);
      setIsLoading(false);
      setId(_id)
      setPhone(phone);
      setBio(bio);
      setAddress(address)
    }
  }, [auth?.user]);

  return (
    <div className="profile --my2">
      {isLoading && <SpinnerImg />}
      <>
        {!isLoading && auth?.user === null ? (
          <p>Something went wrong, please reload the page...</p>
        ) : (
          <Card cardClass={"card --flex-dir-column"}>
            <span className="profile-photo">
              <img src={`${process.env.REACT_APP_API}/profile/photo/${id}`} alt="profilepic" />
            </span>
            <span className="profile-data">
              <p>
                <b>Name : </b> {`${firstName} ${lastName}`}
              </p>
              <p>
                <b>Email : </b> {email}
              </p>
              <p>
                <b>Phone : </b> {phone}
              </p>
              <p>
                <b>Address : </b> {address}
              </p>
              <p>
                <b>Bio : </b> {bio}
              </p>
              <div>
                <Link to="/edit-profile">
                  <button className="--btn --btn-primary">Edit Profile</button>
                </Link>
              </div>
            </span>
          </Card>
        )}
      </>
    </div>
  );
};

export default Profile;