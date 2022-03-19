import React from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="app-layout-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
