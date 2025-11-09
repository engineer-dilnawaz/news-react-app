import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router";

import { Navbar } from "../Navbar";

export const AppWrapper = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};
