import Header from "@/components/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </div>
  );
};

export default DashboardLayout;
