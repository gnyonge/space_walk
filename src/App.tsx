import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import ErrorPage from "pages/ErrorPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/error" element={<ErrorPage />} />
          {/* Default URL '/'을 /home으로 변경 */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* 다른 페이지로 이동하면 404페이지로 이동 */}
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
