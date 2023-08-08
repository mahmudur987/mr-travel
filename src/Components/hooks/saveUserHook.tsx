import { AuthContext } from "@/Context/UserContext";
import { GET_USER } from "@/queries/userQuery";
import { useQuery } from "@apollo/client";
import { useContext } from "react";

export const UsesaveUsere = () => {
  const { user } = useContext(AuthContext);
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USER, {
    variables: { email: user?.email },
  });

  return [userData, userLoading, userError];
};
