import { React, Suspense } from "react";
import "./App.css";
import routers from "./routers/routers";
import Sidebar from "@components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBarProvider } from "./contexts/SideBar";

function App() {
  return (
    <SideBarProvider>
      <Sidebar />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="loading-container">
              <div className="spinner"></div>
              <span>Loading...</span>
            </div>
          }
        >
          <Routes>
            {routers.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<item.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SideBarProvider>
  );
}

export default App;
