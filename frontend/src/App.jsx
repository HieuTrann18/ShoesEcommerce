import { React, Suspense } from "react";
import "./App.css";
import routers from "./routers/routers";
import Sidebar from "@components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBarProvider } from "./contexts/SideBar";
import { ToastProvider } from "./contexts/Toast";
import { StoreProvider } from "./contexts/Store";

function App() {
  return (
    <StoreProvider>
      <ToastProvider>
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
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
