import React from "react";

type Props = { children: React.ReactNode };

function Container({ children }: Props) {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-10 md:px-5 sm:px-2 px-1">
      {children}
    </div>
  );
}

export default Container;
