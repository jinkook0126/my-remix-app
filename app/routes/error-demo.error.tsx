import { isRouteErrorResponse, useRouteError } from "@remix-run/react";

export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex justify-center items-center bg-red-500 h-full">
        <h1 className="text-2xl font-bold">{error.data}</h1>
      </div>
    );
  }
  return <div>Unknown Error</div>;
};
export const loader = () => {
  throw new Response("something went wrong", { status: 500 });
};
export default function Error() {
  return (
    <div className="flex justify-center items-center bg-indigo-500 h-full">
      <h1 className="text-2xl font-bold">Error</h1>
    </div>
  );
}
