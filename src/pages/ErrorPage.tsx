// @ts-check
/** @type {unknown} */

import { useRouteError } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page" className="">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Oops!</h1>
        <h4>Sorry, unexpected error has occured.</h4>
        <p>
          {error.StatusCode} {error.StatusText || error.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
