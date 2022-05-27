import React, { useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {Navbar, Footer, Sidebar, ThemeSettings } from "./components"
import {Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor} from "./pages"


import "./App.css";



const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent position="Top">
              <button
                type="button"
                style={{ background: "blue", borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">sidebar w-0</div>
          )}
          {/* navbar depending upOn current menu is active */}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="flexed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          {/* Routing start */}
          <div>
            <Routes>
              {/* DashBord */}
              <Route path="/" element="Ecommerce" />
              <Route path="/ecommerce" element="Ecommerce" />
              {/* Pages */}
              <Route path="/orders" element="Orders" />
              <Route path="/employees" element="Employees" />
              <Route path="/customers" element="Customers" />
              {/* Apps */}
              <Route path="/kanban" element="Kanban" />
              <Route path="/editor" element="Editor" />
              <Route path="/calendar" element="Calender" />
              <Route path="/color-picker" element="ColorPicker" />
              {/* Charts */}
              <Route path="/line" element="Line" />
              <Route path="/area" element="Area" />
              <Route path="bar" element="Bar" />
              <Route path="pie" element="pie" />
              <Route path="financial" element="Financial" />
              <Route path="color-mapping" element="ColorMapping" />
              <Route path="pyramid" element="Pyramid" />
              <Route path="stacked" element="Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

//  ctrl + / = Comment
// Route :- Declares an element that should be rendered at a certain URL path.
