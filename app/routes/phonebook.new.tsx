import { ActionFunctionArgs, redirect } from "@remix-run/node";
import PhoneBookForm from "~/components/PhoneBookForm";
import { createPhonebook } from "~/services/phonebook.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  await createPhonebook({ name, phone });
  return redirect("/phonebook");
};

export default function PhonebookNew() {
  return (
    <div className="flex flex-col h-full p-4 flex-1 justify-center items-center">
      <h1 className="text-2xl font-bold">전화번호 새로 추가하기</h1>
      <div>
        <PhoneBookForm />
      </div>
    </div>
  );
}
