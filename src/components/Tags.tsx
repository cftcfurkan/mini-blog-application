import React from "react";


type TagProps = {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: (tag: string) => void;
};

const Tag: React.FC<TagProps> = ({
  children,
  selected = false,
  onClick,
}) => {
  return (
    <div
      className={`inline-block rounded-full ${
       "p-[1px]"
      } transition-colors duration-300 ${
        selected
          ? "bg-gradient-to-r from-[#7F5FFF] to-[#01C8FF]"
          : "bg-[#181a2a] border-none"
      }`}
    >
      <span
        onClick={() => onClick?.(children as string)}
        className="block rounded-full px-6 py-2 text-sm text-[#a09bb7] bg-[#181a2a] cursor-pointer"
      >
        {children}
      </span>
    </div>
  );
};

export default Tag;
