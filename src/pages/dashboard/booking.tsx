import React from "react";
import BaseLayouts from "@/Components/layouts/BaseLayouts";
import DashboardLayout from "@/Components/layouts/DashboardLayout";
import Bookings from "@/Components/dashboard/Bookings/Bookings";

const booking = () => {
  return (
    <BaseLayouts>
      <DashboardLayout>
        <Bookings />
      </DashboardLayout>
    </BaseLayouts>
  );
};

export default booking;
