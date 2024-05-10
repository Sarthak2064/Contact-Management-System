import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    <>
      <div className="jumbotron">
        <h1>Welcome {user ? user.name : null}</h1>
        <hr className="my-4" />
        <div className="btn btn-info" role="button">
          <Link to="/create">
            <div className="nav-link">Add Contact</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
