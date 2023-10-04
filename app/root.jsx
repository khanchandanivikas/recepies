import { Outlet } from "@remix-run/react";
import { useRouteError, isRouteErrorResponse } from "@remix-run/react";
import globalStyles from "./styles/global.css";
import bootstrapStyles from "bootstrap/dist/css/bootstrap.min.css";
import bootstrapIconsStyles from "bootstrap-icons/font/bootstrap-icons.css";
import {links as headerStyles} from "./components/layout/header/Header";
import {links as footerStyles} from "./components/layout/footer/Footer";
import { Document } from "./components/layout/Document";
import Error from "./components/utils/Error";

export function links() {
  return [
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: bootstrapStyles },
    ,
    { rel: "stylesheet", href: bootstrapIconsStyles },
    ...headerStyles(), ...footerStyles()
  ];
}

export const meta = () => {
  return [
    { title: "Recepies App" },
    { name: "description", content: "Welcome to my recepies!" },
  ];
};

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  return <Error error={error} />
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
