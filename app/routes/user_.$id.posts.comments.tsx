import { Outlet, useParams } from "@remix-run/react";

export default function UserPostsComments() {
  const { postId } = useParams();
  if (!postId) {
    return <div>Post not found</div>;
  }
  return <Outlet />;
}
