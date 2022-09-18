import AboutBG from "../../img/AboutBG.png";
const About = () => {
  return (
    <div className="About">
      <img src={AboutBG} loading="lazy" type="image/png" alt="AboutBG" />

      <div className="About_textContent">
        
        <h1>ABOUT ME</h1>
        <p>
          Hi my name is Jaylord Silverio. I like to be openminded and explore
          new paths towards to my desired career. I'd like to be part of the
          workforce not only to help my parents but also to experience what it's
          like to be in the real world. Opportunities such as this, I think are
          the best place to strengthen my journey.
        </p>
      </div>
    </div>
  );
};

export default About;
