import { useState } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  const [errorStatus, setErrorStatus] = useState<number | null>(null);
  const [statusText, setStatusText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    setErrorStatus(error.status);
    setStatusText(error.statusText);
    setErrorMessage(error.data);
  }

  return (
    <div id="error-page" className="">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Oops!</h1>
        <h4>Sorry, unexpected error has occured.</h4>
        <p>
          {errorStatus ?? ""} {(statusText ?? "") || (errorMessage ?? "")}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
