import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const profileInfoFromRedux = useSelector((state) => state.profileInfo);
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Profile</h2>
       <h3>Name : {profileInfoFromRedux.name}</h3>
       <h3>Email : {profileInfoFromRedux.email}</h3>
    </div>
  );
};

export default Profile;
