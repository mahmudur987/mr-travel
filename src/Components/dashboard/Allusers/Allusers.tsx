import LoadingSpinner from "@/Components/shared/Loading/Spiner";
import { USERS } from "@/queries/userQuery";
import { useQuery } from "@apollo/client";
import React from "react";
import User from "./user";

const Allusers = () => {
  const { loading, error, data } = useQuery(USERS);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {data && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-5">
            {data?.users.map((user, i) => (
              <User key={i} user={user} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Allusers;
