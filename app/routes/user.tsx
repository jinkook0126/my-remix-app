import { Outlet } from "@remix-run/react";

export default function User() {
  return (
    <div>
      <h1>유저 상세 입니다.</h1>
      <Outlet />
    </div>
  );
}
