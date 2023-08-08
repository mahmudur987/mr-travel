import AddEvents from "@/Components/dashboard/AddEvents/AddEvents";
import BaseLayouts from "@/layouts/BaseLayouts";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const addevent = () => {
  return (
    <BaseLayouts>
      <DashboardLayout>
        <AddEvents />
      </DashboardLayout>
    </BaseLayouts>
  );
};

export default addevent;
