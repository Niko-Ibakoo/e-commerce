import '../styles/social-icons.css';
import AuthenticateForm from '../components/AuthenticateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';


function SignIn() {

    return (
        <>
            <AuthenticateForm mode={"Sign In"}/>

            <div className="social-icons authenticate">
                <a href="#" className="social-button facebook">
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                    Continue with Facebook
                </a>
                <a href="#" className="social-button google">
                    <FontAwesomeIcon className="icon" icon={faGoogle} />
                    Continue with Google
                </a>
                <a href="#" className="social-button apple">
                    <FontAwesomeIcon className="icon" icon={faApple} />
                    Continue with Apple
                </a>
            </div>
        </>
    )
}

export default SignIn;