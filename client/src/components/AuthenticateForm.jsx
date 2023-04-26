import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserInputContext from "../contexts/UserInputContext";
import "../styles/authenticate-flow.css";
import "../styles/social-icons.css";
import {
  faFacebookF,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import ProfilePhotoUploader from "./ProfilePhotoUploader";

function AuthenticateForm({ mode }) {
  const { userInput, setUserInput } = useContext(UserInputContext);
  const { email, password } = userInput;
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const switchToCreateAccount = () => {
    setUserInput({ email, password });
    navigate("/create-account");
  };

  return (
    <div className="authenticate">
      <div className="header">
        <img
          className="genna-helper"
          src={"/genna-logo.png"}
          alt="Genna"
          onClick={() => navigate("/")}
        />
        {mode}
      </div>
      <form className="form">
        {mode !== "Sign In" && (
          <>
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => {
                const startCaseValue = e.target.value
                  .toLowerCase()
                  .replace(/(^|\s)\S/g, (char) => char.toUpperCase());
                setDisplayName(startCaseValue);
              }}
              required
            />
            <small>
              This is how you appear to others throughout the site. You can
              change this later.
            </small>
          </>
        )}
        {mode !== "Complete Your Profile" && (
          <>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) =>
                setUserInput({ ...userInput, password: e.target.value })
              }
              required
            />
          </>
        )}
        {mode === "Sign In" ? (
          <>
            <a
              href="#"
              id="forgot"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot your password?
            </a>
            <div className="signin-create-row">
              <button type="submit">Sign In</button>
              <a href="#" onClick={switchToCreateAccount}>
                Create Account
              </a>
            </div>
          </>
        ) : (
          <>
            <ProfilePhotoUploader
              onChange={(imgURL) =>
                setUserInput({ ...userInput, profileImage: imgURL })
              }
            />
            <div>
              <button type="submit">
                {mode !== "Complete Your Profile" ? mode : "Done"}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default AuthenticateForm;
