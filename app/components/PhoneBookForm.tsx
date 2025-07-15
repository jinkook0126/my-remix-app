import { Form } from "@remix-run/react";

type Props = {
  defaultValues?: { name: string; phone: string };
};

const PhoneBookForm = ({ defaultValues }: Props) => {
  return (
    <Form method="post" className="flex flex-col gap-2 mt-4 ">
      <label htmlFor="name">이름</label>
      <input
        type="text"
        placeholder="홍길동"
        name="name"
        className="border border-zinc-200 rounded-md p-2"
        defaultValue={defaultValues?.name}
      />
      <label htmlFor="phone">전화번호</label>
      <input
        type="tel"
        placeholder="010-1234-5678"
        maxLength={11}
        name="phone"
        className="border border-zinc-200 rounded-md p-2"
        defaultValue={defaultValues?.phone}
      />
      <button type="submit" className="bg-green-500 text-white rounded-md p-2">
        저장
      </button>
    </Form>
  );
};

export default PhoneBookForm;
