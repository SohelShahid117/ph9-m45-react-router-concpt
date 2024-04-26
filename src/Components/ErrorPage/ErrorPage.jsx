import React from "react";
import { Link, useRouteError } from "react-router-dom";
//45-7 Navigate On Click, UseNavigate, Not Found And UseParams

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Opps</h2>
      <p>
        <i>{err.message || err.statusText}</i>
      </p>
      {err.status === 404 && (
        <div>
          <h2>Page Not Found</h2>
          <Link to="/">
            <button>Go Back Home</button>
          </Link>
          {/* <Link></Link>
          <Link></Link> */}
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
