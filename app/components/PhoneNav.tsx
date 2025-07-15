import { Link } from "@remix-run/react";

export default function PhoneNav() {
  return (
    <div className="w-56 h-full bg-zinc-100 border-r border-zinc-200 flex flex-col">
      <div className="flex flex-col items-center justify-center h-12 border-b border-zinc-200">
        <Link
          to="/phonebook/new"
          className="text-bold text-zinc-500 hover:text-zinc-700"
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            번호 추가하기
          </button>
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <ul className="flex flex-col gap-2 p-4"></ul>
      </div>
      <div className="border-t border-zinc-200 h-12 flex items-center justify-center">
        <Link to="/" className="text-bold text-zinc-500 hover:text-zinc-700">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full">
            홈으로
          </button>
        </Link>
      </div>
    </div>
  );
}
