import { Link } from "@remix-run/react";

export default function PageNotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 Not Found</title>
      </head>
      <body>
        <h1>404 Not Found</h1>
        <Link to="/">Go to Home</Link>
      </body>
    </html>
  );
}
