import Image from "next/image";
import React from "react";
import Profilephoto from "./shared/Profilephoto";

const Sidebar = ({ user }: { user: any }) => {
  console.log(user?.externalAccounts[0]?.username);
  return (
    <div className="hidden md:block w-[20%] h-fit border-gray-300 bg-white rounded">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-16 overflow-hidden">
          {user && (
            <Image
              src={"/banner.png"}
              width={200}
              height={200}
              alt="Banner"
              className="w-full h-full rounded-t"
            />
          )}
        </div>

        <div className="my-1 absolute top-10">
        <Profilephoto src={user ? user?.imageUrl : '/user.jpg'} />
        </div>

        <div className="border-b border-b-gray-300">
          <div className="p-2 mt-5 text-center">

            <h1 className="font-semibold hover:underline cursor-pointer">{user ? `${user?.firstName} ${user?.lastName}` : "Login to continue"}</h1>
<p className="text-xs">@{user ? `${user?.externalAccounts[0]?.username}` : "username"}</p>
          </div>
 
          <div className="text-xs">
            <div className="w-full flex justify-between items-center py-2 hover:bg-gray-200">

            </div>
             
          </div>

        </div>

        <div className="my-1 absolute top-10"></div>
      </div>
    </div>
  );
};

export default Sidebar;
