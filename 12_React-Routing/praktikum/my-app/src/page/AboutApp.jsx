import DescriptionAbout from "../components/DescriptionAbout";
import NavbarAbout from "../components/NavbarAbout";

const AboutApp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4 bg-primary pt-5">
            <NavbarAbout />
          </div>
          <div className="col-lg-10 col-md-8 col-sm-8 pt-5">
            <DescriptionAbout
              title="About App"
              text="In this app, you can add, delete, submit and edit items. To edit items, simply double click
        on it. Once you done, press the enter key to resubmit. This app will persist your data in
        the browser local storage. So whether you reload, close your app or reopened it, you still
        have access to your todos items."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutApp;
