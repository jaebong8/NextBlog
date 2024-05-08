import React, { ReactNode } from "react";

const GridTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  );
};

export default GridTemplate;
