import { Outlet } from "@remix-run/react";

export default function User() {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold">유저 상세 페이지 입니다.</p>
      <Outlet />
    </div>
  );
}
