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
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          FlyHigh
        </Link>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <MdFlightTakeoff size={30} />
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View Bookings</button>
              </div>
              <span class="text-md">2 Domestic</span>
              <span class="text-md">8 International</span>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">Profile</a>
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
