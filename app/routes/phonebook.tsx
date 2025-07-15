import { Outlet } from "@remix-run/react";
import PhoneNav from "~/components/PhoneNav";

export default function Phonebook() {
  return (
    <div className="flex flex-row h-screen">
      <PhoneNav />
      <Outlet />
    </div>
  );
}
