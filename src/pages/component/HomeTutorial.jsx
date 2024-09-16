import mainpic from "./assets/home_mainpic.jpg";
import samplepic from "./assets/home_samplepic.jpg";
import samplepic_colorpop from "./assets/home_samplepic_colorpop.jpg";
import samplepic_replace from "./assets/home_samplepic_replace.jpg";
import samplepic_blur from "./assets/home_samplepic_blur.jpg";
import samplepic_gqa from "./assets/home_samplepic_gqa.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const HomeTutorial = () => {
  const navigate = useNavigate();

  return (
    <div className="home-tutorial">
      <div className="img-container">
        <p className="img-text">DEAR IMAGE, the easiest image edit tool</p>
        <img src={mainpic} className="main-image" />
      </div>

      <div className="desc-text">
        <p>
          Start by pressing the button on the right top or scroll down to read
          tutorial!
        </p>
      </div>

      <div id="tutorial-colorpop" className="tutorial-function">
        <p className="function-text">COLORPOP</p>
        <p className="tutorial-text">
          You can select the object to change its color to black and white.
          Please check the command you write contains the keyword 'colorpop'.
        </p>
        <div className="img-wrapper">
          <img src={samplepic} width="1200px" className="default-image" />
          <img src={samplepic_colorpop} width="1200px" className="edit-image" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div id="tutorial-replace" className="tutorial-function">
        <p className="function-text">REPLACE</p>
        <p className="tutorial-text">
          You can select the object and replace it into another object. Please
          check the command you write contains the keyword 'replace'.
        </p>
        <div className="img-wrapper">
          <img src={samplepic} width="1200px" className="default-image" />
          <img src={samplepic_replace} width="1200px" className="edit-image" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div id="tutorial-blur" className="tutorial-function">
        <p className="function-text">BLUR</p>
        <p className="tutorial-text">
          You can blur the background of the object you selected. Please check
          the command you write contains the keyword 'blur'.
        </p>
        <div className="img-wrapper">
          <img src={samplepic} width="1200px" className="default-image" />
          <img src={samplepic_blur} width="1200px" className="edit-image" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div id="tutorial-?" className="tutorial-function">
        <p className="function-text">GQA(OBJECT RECOGNITION)</p>
        <p className="tutorial-text">
          You can ask about the information of the image, such as things
          contained in the image or the number of a certain object.
        </p>
        <div className="img-wrapper">
          <img src={samplepic} width="1200px" className="default-image" />
          <img src={samplepic_gqa} width="1200px" className="edit-image" />
        </div>
        <br />
      </div>

      <div className="start-button">
        <Button text="Start Now" onClick={() => navigate("/Chat")} />
        <br /><br />
      </div>
    </div>
  );
};

export default HomeTutorial;
