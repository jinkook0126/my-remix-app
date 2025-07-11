import { Link, useParams } from "@remix-run/react";
import type { IUserList } from "../types/user";

export default function Nav({ userList }: { userList: IUserList }) {
  const { id } = useParams();
  return (
    <div className="w-56 h-full bg-zinc-100 border-r border-zinc-200 p-4">
      <ul className="flex flex-col gap-2">
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
    </div>
  );
}
