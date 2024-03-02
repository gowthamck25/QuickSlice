import { useNavigate, useRouteError } from "react-router-dom";

import LinkButton from "./LinkButton";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="m-auto max-w-[30rem]">
      <div className="space-y-5 bg-stone-200 px-4 py-4">
        <h1>Something went wrong 😢</h1>
        <p>{error.data || error.message}</p>

        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    </div>
  );
}

export default Error;
