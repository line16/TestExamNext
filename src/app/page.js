
import Header from "./Components/Navbar/Header";
import Footer from "./Components/Footer/page";
import FrontAbout from "./About/FrontpageAboutSec/page";
import FrontpageService from "./Service/FrontpageService/page";
import FrontRec from "./Recommendation/FrontpageRec/page";
import Team from "./Team/page";
import BookAtime from "./Contact/BookAtime/page";

// import "./globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <FrontAbout/>
      <FrontpageService/>
      <FrontRec/>
      <Team/>
      <BookAtime/>
      <Footer/>
    </div>
  );
}
