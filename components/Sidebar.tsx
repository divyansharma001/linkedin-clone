import Image from "next/image";
import React from "react";

const Sidebar = ({ user }: { user: any }) => {
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

        <div className="my-1 absolute top-10"></div>
      </div>
    </div>
  );
};

export default Sidebar;
