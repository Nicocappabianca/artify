import { Link, useNavigate } from "react-router-dom";
import { Auth } from "@/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Logout } from "@mui/icons-material";

const Navbar = () => {
  const [user] = useAuthState(Auth);
  const navigator = useNavigate();

  const logout = async () => {
    await signOut(Auth);
    navigator("/");
  };

  return (
    <header>
      <h3>Artify</h3>
      <nav className="menu">
        <Link className="link" to="/">
          Home
        </Link>
        {user && (
          <Link className="link" to="/generate">
            Generate
          </Link>
        )}
        {user ? (
          <>
            {user.photoURL ? (
              <img
                className="logo"
                src={user.photoURL}
                alt={`${user.displayName || "User"} profile pic`}
                title={user.displayName || "Guest"}
              />
            ) : (
              <div className="d-flex">{user.displayName || "Guest"}</div>
            )}
            <div onClick={logout} className="logout-button" role="button">
              <Logout />
            </div>
          </>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
