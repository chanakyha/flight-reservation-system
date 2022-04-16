import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PlaneSVG from "../assets/svg/airplane.svg";
import { auth } from "../server/firebase";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [roundTrip, setRoundTrip] = useState(0);

  const [entries, setEntries] = useState({
    from: "",
    to: "",
    fromDate: "",
    toDate: "",
  });

  let navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      document.title = `FlyHigh | ${user.displayName}`;
    }
  }, [user]);

  const onSearch = () => {
    if (!entries.from) {
      toast.error("Please enter a valid From location");
      return;
    }
    if (!entries.to) {
      toast.error("Please enter a valid To location");
      return;
    }
    if (!entries.fromDate) {
      toast.error("Please enter a valid From Date location");
      return;
    }
    if (roundTrip && !entries.toDate) {
      toast.error("Please enter a valid To Date location");
      return;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src={PlaneSVG}
          alt="aeroplane SVG"
          className="md:w-1/3 hidden md:inline-flex"
        />
        <div className="md:flex md:flex-col md:space-y-5 mt-10">
          <div className="md:flex md:space-x-10 input_div">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">From</span>
              </label>
              <input
                type="text"
                placeholder="Chennai"
                value={entries.from}
                onChange={(e) =>
                  setEntries({ ...entries, from: e.target.value })
                }
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">To</span>
              </label>
              <input
                type="text"
                placeholder="Delhi"
                value={entries.to}
                onChange={(e) => setEntries({ ...entries, to: e.target.value })}
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>
          </div>
          <div className="md:flex md:space-x-10 date_div">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">From Date</span>
              </label>
              <input
                value={entries.fromDate}
                onChange={(e) =>
                  setEntries({ ...entries, fromDate: e.target.value })
                }
                type="date"
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">To Date</span>
              </label>
              <input
                type="date"
                value={entries.toDate}
                onChange={(e) =>
                  setEntries({ ...entries, toDate: e.target.value })
                }
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-xs"
                disabled={!roundTrip}
              />
            </div>
          </div>
        </div>
        <div className="trips flex flex-col md:flex-row md:space-x-4 mt-5 md:mt-10 mb-2 align-center justify-center">
          <div className="form-control mb-2 md:mb-0">
            <label className="label cursor-pointer space-x-2 ">
              <span className="label-text">Round Trip</span>
              <input
                type="checkbox"
                name="radio-6"
                className="radio radio-accent"
                onChange={() => setRoundTrip(!roundTrip)}
              />
            </label>
          </div>
          <button onClick={onSearch} className="btn btn-accent">
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
