import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Link, redirect, useFetcher, useLoaderData } from "@remix-run/react";
import { deletePhonebook, getPhonebookById } from "~/services/phonebook.server";

export const action = async ({ request, params }: ActionFunctionArgs) => {
  if (request.method === "DELETE") {
    const { id } = params;
    console.log(id);
    await deletePhonebook(Number(id));
    return redirect("/phonebook");
  }
  return null;
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const phonebook = await getPhonebookById(Number(id));
  return { phonebook };
};

export default function PhonebookDetailIndex() {
  const fetcher = useFetcher();
  const { phonebook } = useLoaderData<typeof loader>();
  return (
    <div className="mt-4 p-4">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">이름</h2>
          <p className="text-sm text-gray-500 ml-4 ">{phonebook?.name}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">전화번호</h2>
          <p className="text-sm text-gray-500 ml-4 ">{phonebook?.phone}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">생성일</h2>
          <p className="text-sm text-gray-500 ml-4 ">
            {phonebook?.createdAt.toLocaleDateString()}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">수정일</h2>
          <p className="text-sm text-gray-500 ml-4 ">
            {phonebook?.updatedAt?.toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <Link to={`/phonebook/${phonebook?.id}/edit`} state={{ phonebook }}>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4">
            수정하기
          </button>
        </Link>
        <fetcher.Form method="delete">
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4"
          >
            삭제하기
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}
