import { Helmet, HelmetProvider } from 'react-helmet-async';

import logoW from '../../../Images/LogoW.svg';
import logoB from '../../../Images/LogoB.svg';
import Button from '../../common/Button/Button';
import './styles/landingPage.scss'

function LandingPage() {
  return (
    <HelmetProvider>
    <div className="Home">
      <Helmet>
        <title>Twitter Landing Page</title>
        <meta
          name="description"
          content="This is twitter landing page. Sign in or create an account"
        />
      </Helmet>
      <div className="Home-content-left">
        <img src={logoW} className="LogoW" alt="logo"/> 
        </div> 
          <div className="Home-content-right">
          
          <div><div><img src={logoB} alt="logo" width="82" height="66"/> </div>
          <h1>
            Welcome to Twitter
          </h1>

          <a href="./LogIn"><Button
            className="white-button"
            text="Login now"
          /></a>
          <p className="secondary-color"> Don't have an account?<a href="./SignUp">Join free today</a></p>
          <a href="./SignUp"><Button
            className="white-button"
            text="Sign Up"
          /></a>
          </div>
        </div>
    </div>
    </HelmetProvider>
  );
}

export default LandingPage;
