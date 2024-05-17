import { useRouteError } from "react-router-dom";
import Button from "./Button";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <Button to="-1">&larr; Go back</Button>
    </div>
  );
}

export default Error;
