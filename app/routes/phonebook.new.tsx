import { ActionFunctionArgs } from "@remix-run/node";
import PhoneBookForm from "~/components/PhoneBookForm";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const phone = formData.get("phone");
  console.log(name, phone);
  return null;
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
