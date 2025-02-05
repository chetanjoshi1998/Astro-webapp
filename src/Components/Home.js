import Navbar from "./Navbar";
import "./styles/home.css";
import stars from "../Assets/Orion constellation2.jpg"
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main_wraphome col-md-12 col-ld-12 col-sd-12">
        <div className="card home_card card_bg col-md-6 col-sd-12 col-ld-6">
          {/* <img src={stars} className="card-img-top" alt="..."/> */}
          <div className="card-body ">
            <p className="card-text">
             Match Making
            </p>
          </div>
        </div>
        <div className="card home_card col-md-6 col-sd-12 col-ld-6 col-xs-12 mx-4">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="main_wraphome col-md-12 col-ld-12 col-sd-12">
        <div className="card home_card col-md-6 col-sd-12 col-ld-6">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card home_card col-md-6 col-sd-12 col-ld-6 col-xs-12 mx-4">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Home;
