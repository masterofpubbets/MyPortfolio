import { React } from 'react';
function Footer() {
  return (
    <div className="app-footer">
      <footer className="page-footer deep-orange darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Eslam Aly's Portfolio</h5>
              <p className="grey-text text-lighten-4">This portfolio is been made by Eslam Aly using React.</p>
              <p className="grey-text text-lighten-4">Source code for this portfolio in Github "Please give a star"</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/eslam-aly-4041b1a7/">Linkedin</a></li>
                <li><a className="grey-text text-lighten-3" href="https://github.com/masterofpubbets">Github</a></li>
                <li><a className="grey-text text-lighten-3" href="https://github.com/masterofpubbets/MyPortfolio">Project on Github</a></li>
                <li><a className="grey-text text-lighten-3" href="mailto:master.pubbets@gmail.com">Personal Mail: master.pubbets@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © All rights reserved to Eslam Aly
            <i className="material-icons prefix grey-text text-lighten-3 right">face</i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;