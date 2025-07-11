import { Link, useLoaderData } from "@remix-run/react";
import { getUserDetail } from "../services/user.server";

export const loader = async ({ params }: { params: { id: string } }) => {
  const user = await getUserDetail(params.id);
  return { user };
};

export default function UserIndex() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">이름</h2>
          <p className="text-sm text-gray-500 ml-4 ">{user.name}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">아이디</h2>
          <p className="text-sm text-gray-500 ml-4">{user.username}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">이메일</h2>
          <p className="text-sm text-gray-500 ml-4">{user.email}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">전화번호</h2>
          <p className="text-sm text-gray-500 ml-4">{user.phone}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">웹사이트</h2>
          <p className="text-sm text-gray-500 ml-4">{user.website}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">주소</h2>
          <p className="text-sm text-gray-500 ml-4">
            {user.address.street}
            <br />
            {user.address.suite}
          </p>
        </div>
        <Link to={`/user/${user.id}/posts`} className="w-fit">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-fit hover:bg-blue-600">
            포스트 보러가기
          </button>
        </Link>
      </div>
    </div>
  );
}
