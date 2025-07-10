import { useLoaderData } from "@remix-run/react";
import { getUserDetail } from "../services/user.server";

export const loader = async ({ params }: { params: { id: string } }) => {
  const user = await getUserDetail(params.id);
  return { user };
};

export default function UserDetail() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>유저 상세 입니다.</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{user.address.street}</p>
      <p>{user.address.suite}</p>
    </div>
  );
}
