import { Link } from "@remix-run/react";
import type { IUserList } from "../types/user";

export default function Nav({ userList }: { userList: IUserList }) {
  return (
    <div className="w-56 bg-zinc-100 h-screen border-r border-zinc-200 p-4">
      <ul className="flex flex-col gap-2">
        {userList.map((user) => (
          <li
            key={user.id}
            className="text-md text-zinc-500 hover:text-zinc-700 cursor-pointer"
          >
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
