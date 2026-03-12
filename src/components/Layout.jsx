import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {

  const styles = {

    content: {

      marginLeft: "240px",

      marginTop: "60px",

      padding: "30px",

      minHeight: "calc(100vh - 60px)",

      background: "#f4f6f9"

    }

  };

  return (

    <>
      <Sidebar />
      <Header />

      <div style={styles.content}>
        {children}
      </div>
    </>

  );

}
