import { useLoaderData } from "@remix-run/react";
import { getPostComments } from "~/services/user.server";
import type { ICommentList } from "~/types/user";

export const loader = async ({ params }: { params: { postId: string } }) => {
  const comments: ICommentList = await getPostComments(params.postId);
  return { comments: comments };
};

export default function UserPostsComments() {
  const { comments } = useLoaderData<typeof loader>();
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-1/2">
        <h1 className="text-2xl font-bold">Comments</h1>
        <div className="flex flex-col gap-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border border-gray-200 p-4 rounded-md"
            >
              <h2 className="text-lg font-bold">{comment.name}</h2>
              <p className="text-sm text-gray-500">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
