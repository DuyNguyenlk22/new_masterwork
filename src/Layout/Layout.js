import React from "react";
import Header from "../Components/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
