import BaseLayouts from "@/layouts/BaseLayouts";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const joinedEvent = () => {
  return (
    <BaseLayouts>
      <DashboardLayout>
        <div className="flex h-96 w-full  justify-center items-center">
          <h1 className="w-full  text-3xl font-bold text-center text-pink-500">
            You have not joined any Event yet
          </h1>
        </div>
      </DashboardLayout>
    </BaseLayouts>
  );
};

export default joinedEvent;
