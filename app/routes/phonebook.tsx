import { Outlet, useLoaderData } from "@remix-run/react";
import PhoneNav from "~/components/PhoneNav";
import { getPhonebook } from "~/services/phonebook.server";

export const loader = async () => {
  const phonebook = await getPhonebook();
  return { phonebook };
};

export default function Phonebook() {
  const { phonebook } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-row h-screen">
      <PhoneNav phonebook={phonebook} />
      <Outlet />
    </div>
  );
}
