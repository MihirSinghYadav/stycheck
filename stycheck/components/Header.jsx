"use client";

import { useState } from "react";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";
import Popup from "./PopUp";

export default function Header() {

  const [btnPopup, setBtnPopup] = useState(false);
  const { data: session, status } = useSession();

  setTimeout(()=>{
    setTimedPopup(true);
  },3000)

  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="text-start">
          <h1 className="text-sky-400">Welcome,
            <span className="font-bold text-2xl">{session.user.name}</span></h1>
        </div>
        <button className=" border-black rounded-lg border-2 w-32 h-16 m-12 "
          onClick={() => setBtnPopup(true)}>Create Secret Key</button>

        <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
          <h2>sfdf</h2>
        </Popup>

        <Popup trigger={timePopup} setTrigger={setTimedPopup}>
          <h3>My timed popup</h3>
        </Popup>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      <h1>Login To Get Started</h1>
      <LoginButton />
    </div>
  );
}
