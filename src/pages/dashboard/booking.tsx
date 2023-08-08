import React from "react";
import BaseLayouts from "@/layouts/BaseLayouts";
import DashboardLayout from "@/layouts/DashboardLayout";
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
