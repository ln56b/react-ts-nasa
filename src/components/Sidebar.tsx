import { Picture } from "../App";

type SidebarProps = {
  picture: Picture | null;
  handleOpenSidebar: () => void;
};

export default function Sidebar({ picture, handleOpenSidebar }: SidebarProps) {
  return (
    picture && (
      <aside className="sidebar">
        <div className="bg-overlay" onClick={handleOpenSidebar}></div>
        <div className="sidbar-contents">
          <h2>{picture.title}</h2>
          <div>
            <p className="description-title">{picture.date}</p>
            <p className="description-container">{picture.explanation}</p>
          </div>
        </div>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </aside>
    )
  );
}
