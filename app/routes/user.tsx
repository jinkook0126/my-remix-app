import { Outlet, useLoaderData } from "@remix-run/react";
import Nav from "~/components/Nav";
import { getUserList } from "~/services/user.server";

export const loader = async () => {
  const userList = await getUserList();
  return {
    userList,
  };
};

export default function User() {
  const { userList } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-row h-screen">
      <Nav userList={userList} />
      <Outlet />
    </div>
  );
}
