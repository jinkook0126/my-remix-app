import { ActionFunctionArgs } from "@remix-run/node";
import { useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { useRef } from "react";
import { addTodo, getTodos } from "~/services/todo.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const action = formData.get("action");
  console.log(action);
  if (action === "add") {
    const contents = formData.get("contents");
    console.log(contents);
    if (contents) {
      await addTodo(contents as string);
      return null;
    }
  }
  return null;
};

export const loader = async () => {
  const todos = await getTodos();
  return { todos };
};

export default function Optimistic() {
  const navigate = useNavigate();
  const { todos } = useLoaderData<typeof loader>();
  const inputRef = useRef<HTMLInputElement>(null);
  const fetcher = useFetcher();
  const onAdd = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    fetcher.submit(
      { action: "add", contents: "fjfjfjfid" },
      { method: "post" }
    );
  };
  return (
    <div className="bg-gray-300 h-full p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => navigate("/")}
      >
        홈으로
      </button>
      <h1 className="text-2xl font-bold text-center">낙관적 UI 테스트</h1>
      <div className="flex flex-col items-center justify-center mt-4 bg-white p-4 rounded-md">
        <fetcher.Form>
          <div className="flex items-center justify-center gap-4">
            <input
              type="text"
              name="contents"
              className="border-2 border-gray-300 rounded-md p-2"
              ref={inputRef}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              name="action"
              value="add"
              onClick={onAdd}
            >
              추가
            </button>
          </div>
        </fetcher.Form>

        <div className="flex flex-col items-center justify-center mt-4  p-4 rounded-md border-2 border-gray-300">
          {todos?.map((todo) => (
            <p key={todo.id}>{todo.contents}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
