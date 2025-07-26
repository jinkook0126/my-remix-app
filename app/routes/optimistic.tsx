import { ActionFunctionArgs } from "@remix-run/node";
import { useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import Spinner from "~/components/Spinner";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "~/services/todo.server";
import { ITodo } from "~/types/todo";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  console.log(intent);
  if (intent === "add") {
    const contents = formData.get("contents");
    if (contents) {
      await addTodo(contents as string);
      return null;
    }
  }
  if (intent === "delete") {
    const id = formData.get("id");
    if (id) {
      await deleteTodo(Number(id));
      return null;
    }
  }
  if (intent === "update") {
    const id = formData.get("id");
    if (id) {
      await updateTodo(Number(id));
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
  const [list, setList] = useState<ITodo[]>(todos);
  const inputRef = useRef<HTMLInputElement>(null);
  const fetcher = useFetcher();
  const intent = fetcher.formData?.get("intent");
  const isDeleting = fetcher.state === "submitting" && intent === "delete";
  const isAdding = fetcher.state === "submitting" && intent === "add";
  const onAdd = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contents = inputRef.current?.value ?? "";
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    fetcher.submit({ intent: "add", contents }, { method: "post" });
  };

  const onDelete = (id: number) => {
    fetcher.submit({ intent: "delete", id }, { method: "post" });
  };

  const onToggle = (id: number) => {
    setList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    fetcher.submit({ intent: "update", id }, { method: "post" });
  };

  useEffect(() => {
    setList(todos);
  }, [todos]);

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
              onClick={onAdd}
              disabled={isAdding}
            >
              {isAdding ? <Spinner /> : "추가"}
            </button>
          </div>
        </fetcher.Form>

        <div className="flex flex-col items-center justify-center mt-4  p-4 rounded-md border-2 border-gray-300 w-[400px] gap-4">
          {list?.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center space-x-2 w-full justify-between"
            >
              <p>{todo.contents}</p>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => onToggle(todo.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200
        ${todo.done ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200
          ${todo.done ? "translate-x-5" : "translate-x-1"}`}
                  />
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => onDelete(todo.id)}
                  disabled={isDeleting}
                >
                  {isDeleting ? <Spinner /> : "삭제"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
