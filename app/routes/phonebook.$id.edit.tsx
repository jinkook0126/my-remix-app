import { ActionFunctionArgs } from "@remix-run/node";
import { redirect, useLocation } from "@remix-run/react";
import PhoneBookForm from "~/components/PhoneBookForm";
import { updatePhonebook } from "~/services/phonebook.server";
import type { IPhonebook } from "~/types/phonebook";

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const { id } = params;
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  await updatePhonebook(Number(id), { name, phone });
  return redirect(`/phonebook/${id}`);
};

export default function PhonebookEdit() {
  const location = useLocation();
  const state: { phonebook: IPhonebook } = location.state;
  return (
    <div className="flex flex-col h-full p-4 flex-1 justify-center items-center">
      <h1 className="text-2xl font-bold">전화번호 수정하기</h1>
      <PhoneBookForm defaultValues={state?.phonebook} />
    </div>
  );
}
