import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [profile,setProfile]=useState({});
  const getProdfileDetails = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/getUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      const data=await res.json();
      setProfile(data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getProdfileDetails();
  },[])
  return (
    <>
      <div class="max-w-lg mx-auto my-10 bg-white rounded-2xl mt-[16%] shadow-2xl p-5">
        <img
          class="w-32 h-32 rounded-full mx-auto cursor-pointer"
          src={`${profile.profile}`}
          alt="Profile picture"
        />
        <h2 class="text-center text-2xl font-semibold mt-3">{profile.name}</h2>
        <h2 class="text-center text-2xl font-semibold mt-3">
          {profile.email}
        </h2>
        <h2 class="text-center text-2xl font-semibold mt-3 text-pink-400">
          Secret: {profile.secret}
        </h2>
      </div>
    </>
  );
};

export default UserProfile;
