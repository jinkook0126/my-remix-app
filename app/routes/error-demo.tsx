import { Link, Outlet, useNavigate } from "@remix-run/react";

export default function ErrorDemo() {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로 돌아가기
      </button>
      <div className="flex flex-col flex-1 mt-4 gap-10">
        <div>
          <h1 className="text-2xl font-bold">Error Demo</h1>
          <div className="flex gap-2 mt-4">
            <Link to="/error-demo/error">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                에러 발생
              </button>
            </Link>
            <Link to="/error-demo/normal">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                정상 동작
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
