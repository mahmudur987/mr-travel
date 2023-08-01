import Footer from "@/Components/shared/Footer/Footer";
import Header from "@/Components/shared/Header/Header";
import { AuthContext } from "@/Context/UserContext";
import Head from "next/head";
import React, { useContext } from "react";

const BaseLayouts = ({ children }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>MR-TRavel</title>
      </Head>
      <Header user={user} logout={logout} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default BaseLayouts;
