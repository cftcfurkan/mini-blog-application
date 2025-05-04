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
       "p-[2px]"
      } transition-colors duration-300 ${
        selected
          ? "bg-gradient-to-r from-[#7F5FFF] to-[#01C8FF]"
          : "bg-[#181a2a] border-none"
      }`}
    >
      <span
        onClick={() => onClick?.(children as string)}
        className={`block rounded-full px-4 py-1 text-sm bg-[#000000] cursor-pointer ${
          selected ? "text-[#fff]" : "text-[#727581]"
        }`}
              >
        {children}
      </span>
    </div>
  );
};

export default Tag;
