import { Picture } from "../App";

type FooterProps = {
  picture: Picture | null;
  handleOpenSidebar: () => void;
};

export default function Footer({ picture, handleOpenSidebar }: FooterProps) {
  return (
    picture && (
      <footer>
        <div className="bg-gradient"></div>
        <div>
          <h1>APOD Project</h1>
          <h2>{picture.title}</h2>
        </div>
        <button onClick={handleOpenSidebar}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </footer>
    )
  );
}
