import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export type Picture = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
function App() {
  const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

  const [picture, setPicture] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleOpenSidebar() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date().toISOString().split("T")[0];
      const localKey = `nasa-picture-${today}`;
      if (localStorage.getItem(localKey)) {
        setPicture(JSON.parse(localStorage.getItem(localKey) as string));
        return;
      }

      localStorage.removeItem(localKey);

      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
        );
        const apiRes = await response.json();
        setPicture(apiRes);
        localStorage.setItem(localKey, JSON.stringify(apiRes));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {picture ? (
        <Main picture={picture} />
      ) : (
        <div className="loading">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal && (
        <Sidebar picture={picture} handleOpenSidebar={handleOpenSidebar} />
      )}
      {picture && (
        <Footer picture={picture} handleOpenSidebar={handleOpenSidebar} />
      )}
    </>
  );
}

export default App;
