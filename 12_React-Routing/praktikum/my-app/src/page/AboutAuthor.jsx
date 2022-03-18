import NavbarAbout from "../components/NavbarAbout";
import DescriptionAbout from "../components/DescriptionAbout";

const AboutAuthor = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4 bg-primary pt-5">
            <NavbarAbout />
          </div>
          <div className="col-lg-10 col-md-8 col-sm-8 pt-5">
            <DescriptionAbout
              title="About Author"
              text="This app was developed by someone, a self-taught web developer and technical writer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAuthor;
