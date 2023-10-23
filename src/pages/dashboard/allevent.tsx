import Events from "@/Components/dashboard/AllEvents/Events";
import BaseLayouts from "@/Components/layouts/BaseLayouts";
import DashboardLayout from "@/Components/layouts/DashboardLayout";
import React from "react";

const alluser = () => {
  return (
    <BaseLayouts>
      <DashboardLayout>
        <Events />
      </DashboardLayout>
    </BaseLayouts>
  );
};

export default alluser;
