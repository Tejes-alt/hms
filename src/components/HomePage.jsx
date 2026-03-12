import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Pbody from "./Pbody";
import Footer from "./Footer";

const HomePage = () => {

  const styles = {

    layout: {

      minHeight: "100vh",

      background: "#f1f5f9",

      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"

    },


    mainContent: {

      marginLeft: "240px",     // sidebar width

      marginTop: "70px",       // header height

      marginBottom: "60px",    // footer height

      padding: "30px",

      minHeight: "calc(100vh - 130px)",

      background: "#f8fafc",

      transition: "all 0.2s ease"

    }

  };


  return (

    <div style={styles.layout}>

      <Header />

      <Sidebar />

      <main style={styles.mainContent}>

        <Pbody />

      </main>

      <Footer />

    </div>

  );

};

export default HomePage;
