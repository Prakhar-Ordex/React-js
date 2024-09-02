
import Heder from "./Heder";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Heder />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
