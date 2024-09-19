"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getSignUp, getSignIn, getSignOut } from "../../Auth/page";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notLoggedIn = useRef(null);

  const router = useRouter();

  //   Signup
  const handleSignUp = () => {
    getSignUp(email, password);
    router.refresh();
  };

  //   SignIn
  const handleSignIn = async () => {
    const data = await getSignIn(email, password);

    if (data.user != null) {
      router.push("/Admin");
    } else {
      if (notLoggedIn.current) {
        notLoggedIn.current.style.display = "block";
      }
      router.refresh();
    }
  };
  
// signOut
  const handleSignOut = async () => {
    const data = await getSignOut();
    console.log(data);
    router.refresh();
  };

  useEffect(() => {
    if (notLoggedIn.current) notLoggedIn.current.style.display = "none";
  }, []);

  return (
    <>
      <div className="container mx-auto p-5 my-10 w-96 shadow-md">
        <div className="mb-4">
          <label>Email</label>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-6">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="flex justify-center">
          <button onClick={handleSignUp}>Sign up</button>
          <button onClick={handleSignIn}>Sign in</button>
          <button onClick={handleSignOut}>Sign out</button> 
        </div>

        <div ref={notLoggedIn} id="feedback">
          Fejl i login
        </div>
      </div>
    </>
  );
};

export default Login;

