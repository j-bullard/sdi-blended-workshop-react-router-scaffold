import "@/styles/global.css";
import "nprogress/nprogress.css";

import AppRouter from "@/components/AppRouter";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Fragment>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Fragment>
);
