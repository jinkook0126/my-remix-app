import { useLoaderData, Outlet, Link } from "@remix-run/react";
import { getUserPosts } from "~/services/user.server";
import type { IPostList } from "~/types/user";

export const loader = async ({ params }: { params: { id: string } }) => {
  const posts: IPostList = await getUserPosts(params.id);
  return { posts };
};

export default function UserPosts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            to={`/user/${post.userId}/posts/comments/${post.id}`}
            key={post.id}
          >
            <div className="flex flex-col gap-2 border border-gray-200 p-4 rounded-md">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
