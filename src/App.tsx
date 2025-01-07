import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenSidebar() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Main />
      {showModal && <Sidebar handleOpenSidebar={handleOpenSidebar} />}
      <Footer handleOpenSidebar={handleOpenSidebar} />
    </>
  );
}

export default App;
