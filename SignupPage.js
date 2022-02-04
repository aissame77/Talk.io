import { useRef, useState } from "react";
import { signup, useAuth } from "./firebase";
import { Link, Navigate } from "react-router-dom";
import styles from './App.css';
export default function SignupPage() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [getName, setName] = useState(false);

  async function handleSignup() {
    setLoading(true);
     try {
      await signup(emailRef.current.value, passwordRef.current.value);
     } catch {
       alert("Error! \nMake sure you typed an email not used and your password is at least 6 digits");
     }
    setLoading(false);
  }
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
    setPasswordShown(!passwordShown);
    }
    if (currentUser) {
      return <Navigate to="/Messagerie" />;
    }
  return (
    <div className="Family" onKeyPress={(e) => e.key === 'Enter' && handleSignup()} id="main">
      <h1 className="center">Système de Messagerie 0.1</h1>
      <div className="Style">
        <div className="Style1">
          <div><h1>Sign Up</h1></div>
        <div>
          <form>
            <div className="Style2">
              <div className="Style3">
                <label >Email</label>
                <span>Already have an account? <Link to="/LoginPage" style={{ textDecoration: 'none' }}><span className="spanStyle2" > Log in</span></Link></span>
              </div>
              <div className="Style4">
                <input className="input1" disabled={ loading || currentUser } ref={emailRef} type="text" placeholder="xxxxx@xxxx.xxx" />
              </div>
            </div>
            <div className="Style5">
              <div className="Style6">
                <label>Password</label>
                <span className="spanStyle" onClick={() => {togglePassword();setName(!getName)}}><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 640 512" className="eyeicon"><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" ></path></svg>
                {getName ? 'Hide' : 'Show'}</span>
              </div>
              <div className="Style7">
                <input className="input2" disabled={ loading || currentUser } ref={passwordRef} type={passwordShown ? "text" : "password"} placeholder="At least 6 digits" />
              </div>
            </div>
          </form>
        </div>
        <div className="Style8"></div>
          <div className="Style9">
            <div>
            <button className="buttonStyle1" disabled={ loading || currentUser } onClick={handleSignup}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Style11">Welcome { currentUser?.email } 
      </div>
    </div>
  );
}
