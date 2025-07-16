import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getPhonebookById } from "~/services/phonebook.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const phonebook = await getPhonebookById(Number(id));
  return { phonebook };
};

export default function PhonebookDetail() {
  return <Outlet />;
}
