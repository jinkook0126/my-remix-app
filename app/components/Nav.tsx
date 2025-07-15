import { Link, useParams } from "@remix-run/react";
import type { IUserList } from "../types/user";

export default function Nav({ userList }: { userList: IUserList }) {
  const { id } = useParams();
  return (
    <div className="w-56 h-full bg-zinc-100 border-r border-zinc-200">
      <div className="flex flex-col h-full justify-between">
        <ul className="flex flex-col gap-2 p-4">
          {userList.map((user) => (
            <li
              key={user.id}
              className="text-md hover:text-zinc-700 cursor-pointer"
            >
              <Link
                to={`/user/${user.id}`}
                className={`${
                  id === user.id.toString()
                    ? "text-zinc-700 font-bold"
                    : "text-zinc-500"
                }`}
              >
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-zinc-200 h-12 flex items-center justify-center">
          <Link to="/" className="text-bold text-zinc-500 hover:text-zinc-700">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              홈으로
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
