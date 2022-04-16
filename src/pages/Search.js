import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../server/firebase";

const Search = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      document.title = `FlyHigh | ${user.displayName}`;
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      {state?.from}
      {state?.to}
      {state?.fromDate}
      {state?.toDate}
      {state?.roundTrip}
    </div>
  );
};

export default Search;
