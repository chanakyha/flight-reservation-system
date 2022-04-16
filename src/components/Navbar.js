import React from "react";
import { auth, signOut } from "../server/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { MdFlightTakeoff } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const onSignOut = () => {
    toast.promise(signOut(auth), {
      loading: "Attempting to Sign out...",
      success: <b>Signed Out Successfully</b>,
      error: <b>Failed to Log Out</b>,
    });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          FlyHigh
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <MdFlightTakeoff size={30} />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex="0"
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  View Bookings
                </button>
              </div>
              <span className="text-md">2 Domestic</span>
              <span className="text-md">8 International</span>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user?.photoURL ||
                  "https://api.lorem.space/image/face?hash=33791"
                }
              />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={onSignOut}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
