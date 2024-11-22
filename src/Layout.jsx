import { Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div className="layout-common">
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
