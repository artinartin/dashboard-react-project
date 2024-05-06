import "./../css/notFoundPage.css";
import { Link } from "react-router-dom";

import notFoundImage from "../assets/404.png";
function notFoundPage() {
  return (
    <>
      <div className="text-center m-5">
        <img src={notFoundImage} alt="" className="notFound-img" />
        <h1 className="notFoundHeader mt-3">Oops! the page not found.</h1>
        <h6 className="notFoundDescription">
          Or simply leverage the expertise of our consultation team.
        </h6>
        <Link to={"/"}>
          <button className="btn btn-info notFoundButton mt-3">Go Home</button>
        </Link>
      </div>
    </>
  );
}

export default notFoundPage;
