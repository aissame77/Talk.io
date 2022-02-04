import { useRef, useState } from "react";
import { logout,useAuth } from "./firebase";
import { Link } from "react-router-dom";
import styles from './App.css';
export default function LoginPage() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <div className="Family" id="main">
      <h1 className="center">Système de Messagerie 0.1</h1>
      <div className="Style11">Welcome { currentUser?.email } 
      <Link to="/LoginPage" style={{ textDecoration: 'none' }} ><span className="spanStyle3" onClick={handleLogout} disabled={ loading || !currentUser }> Log out</span></Link>
      </div>
    </div>
  );
}