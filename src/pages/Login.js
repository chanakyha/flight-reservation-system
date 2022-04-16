import React, { useEffect } from "react";
import GoogleLogoSVG from "../assets/svg/GoogleLogo.svg";
import {
  auth,
  googleProvider,
  signInWithPopup,
  doc,
  setDoc,
  db,
} from "../server/firebase";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        { merge: true }
      ).then(() => {
        navigate("/");
      });
    }

    document.title = "Login";
  }, [user]);

  const onGoogleLogin = () => {
    toast.promise(signInWithPopup(auth, googleProvider), {
      loading: "Attempting to Sign in...",
      success: <b>Logged In Successfully</b>,
      error: <b>Failed to Log in</b>,
    });
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center p-4">
      <button
        onClick={onGoogleLogin}
        className="drop-shadow-lg bg-white p-4 rounded-lg flex flex-col justify-center items-center"
      >
        <h1 className="font-bold mb-4">Login With Google</h1>
        <img src={GoogleLogoSVG} className="w-[90%]" alt="google-logo" />
      </button>
    </div>
  );
};

export default Login;
