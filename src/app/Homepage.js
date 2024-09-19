
import FrontAbout from "./About/FrontpageAboutSec/page";
import FrontpageService from "./Service/FrontpageService/page";
import FrontRec from "./Recommendation/FrontpageRec/page";
import Team from "./Team/page";
import BookAtime from "./Contact/BookAtime/page";

// import "./globals.css";

export default function Homepage() {
  return (
    <div>
      <FrontAbout/>
      <FrontpageService/>
      <FrontRec/>
      <Team/>
      <BookAtime/>
    </div>
  );
}
