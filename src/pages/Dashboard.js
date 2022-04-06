import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../server/firebase";

const Dashboard = () => {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
