"use client"
import Header from "./Components/Navbar/Header";
import Footer from "./Components/Footer/page";
import Homepage from "./Homepage";

//import LoginContextProvider from "./Context/LoginContext";

// import "./globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Homepage />
      <Footer />
    </main>

  );
}
