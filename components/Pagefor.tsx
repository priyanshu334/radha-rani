"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";

const Pagefor = () => {
  return (
    <div className=" flex flex-col items-center justify-center">

      <PageTransition totalPages={19} />
    </div>
  );
};

export default Pagefor;
