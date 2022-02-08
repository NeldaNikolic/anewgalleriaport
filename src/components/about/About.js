import classes from "./About.module.css";
import PageHeader from "./../pageheader/PageHeader";
import codethree from "./../../img/galleriahistory.jpg";
import codefour from "./../../img/galleriainsparation.jpg";
import codefive from "./../../img/galleriastyle.jpg";
import { FaBook, FaImage, FaRegImages } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import History from "../history/History";

const About = () => {
  return (
    <div className={classes.Aboutme} id="about">
      <PageHeader />
      <Container className={classes.Abouttext}>
        <Row className={classes.Aboutul}>
          <Col md={2} sm={1} className={classes.Aboutli}>
            <History tittle="HISTORY" />
            <div className={classes.AboutIconWrapper}>
              <FaBook className={classes.Abouticon} />
            </div>
            <History
              parag="In 1839, with exposure times of just a few seconds,
                            the daguerreotype first became a means of using photography commercially 
                            for portraits. This has proven to be a critical juncture in the history of 
                            photograph when it comes to the proliferation of cameras and the success of the medium.
                            Just a few years later, William Henry Fox Talbot came up with the calotype 
                            process. This was the first process that let photographers create a negative
                            from which multiple prints could be made."
            />

            <img className={classes.codethree} src={codethree} alt="code"></img>
          </Col>

          <Col md={2} sm={1} className={classes.Aboutli}>
            <History tittle="ADMITRATION" />
            <div className={classes.AboutIconWrapper}>
              <FaImage className={classes.Abouticon} />
            </div>
            <History
              parag="Every person have their own gateway from daily problems and inspections. 
                         I found that intaking small little fragmental beauty that planet earth is giving 
                         to all leaving creatures. Creations and invention are my patience from a young age
                         I am hopping that each person seeing this will feel instant love and connection with all 
                         the little pieces surrounding us and find the beauty in  it. 
                         Life can be visually distracting however to take time and uniquely identifying some 
                         fragments of art that natures offers is courageous. Leaving you with our form of
                          manifestation of medication. So long view our Galleria port."
            />

            <img className={classes.codefour} src={codefour} alt="code"></img>
          </Col>
          <Col md={2} sm={1} className={classes.Aboutli}>
            <History tittle="STYLES" />
            <div className={classes.AboutIconWrapper}>
              <FaRegImages className={classes.Abouticon} />
            </div>
            <History
              parag="Adventure photography is much more self-explanatory than abstract photography. 
                        This type of photography captures images of adventures, usually in the great outdoors. 
                        It often features remarkable landscape shots, adventurous travelers, and challenging 
                        shooting conditions because of accessibility to particular locations and shifting weather 
                        conditions while taking photographs outside."
            />

            <img className={classes.codefive} src={codefive} alt="code"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
