import Allusers from "@/Components/dashboard/Allusers/Allusers";
import BaseLayouts from "@/Components/layouts/BaseLayouts";
import DashboardLayout from "@/Components/layouts/DashboardLayout";
import React from "react";

const alluser = () => {
  return (
    <BaseLayouts>
      <DashboardLayout>
        <Allusers />
      </DashboardLayout>
    </BaseLayouts>
  );
};

export default alluser;
