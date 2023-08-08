import Profile from "@/Components/dashboard/profile/Profile";
import BaseLayouts from "@/layouts/BaseLayouts";
import DashboardLayout from "@/layouts/DashboardLayout";

import React from "react";

const DashboardPage = () => {
  return (
    <BaseLayouts>
      <DashboardLayout>
        <Profile />
      </DashboardLayout>
    </BaseLayouts>
  );
};

export default DashboardPage;
