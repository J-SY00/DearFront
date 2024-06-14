import picture1 from "./assets/IMG_4264.jpg";
import picture2 from "./assets/IMG_1.jpg";
import picture3 from "./assets/IMG_2.jpg";
import picture4 from "./assets/IMG_3.jpg";
import picture5 from "./assets/IMG_4.jpg";
import picture6 from "./assets/IMG_5.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const HomeTutorial = () => {
  const navigate = useNavigate();
  return (
    <div className="home-tutorial">
      <div className="img-container">
        <p className="img-text">DEAR IMAGE, the easiest image edit tool</p>
        <img src={picture1} />
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
        <img src={picture2} width="1000px" />
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
        <img src={picture3} width="1000px" />
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

      <div id="tutorial-emoji" className="tutorial-function">
        <p className="function-text">EMOJI</p>
        <p className="tutorial-text">
          You can add emoji by describing the position. Remember, the detailed
          description of the position and the emoji creates more accurate
          result! Please check the command you write contains the keyword
          'emoji'.
        </p>
        <img src={picture4} width="1000px" />
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
        <img src={picture5} width="1000px" />
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
          You can ask about the information of the image, such as the number of
          a certain object. Please write question mark '?' at the end of your
          command.
        </p>
        <img src={picture6} width="1000px" />
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
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div id="start-button">
        <Button text="Start Now" onClick={() => navigate("../Chat")} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomeTutorial;
