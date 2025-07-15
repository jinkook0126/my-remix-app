import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App kk" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <Link to="/user">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          라우팅 테스트
        </button>
      </Link>
      <Link to="/phonebook">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          폼 액션 테스트
        </button>
      </Link>
    </div>
  );
}
