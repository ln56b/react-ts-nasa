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
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function handleOpenSidebar() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
        );
        const apiRes = await response.json();
        setPicture(apiRes);
        setLoading(false);
        console.log(apiRes);
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
