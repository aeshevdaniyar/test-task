import { Route, Routes } from "react-router-dom";
import { routes } from "../config/routes";

export const Routing = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};
