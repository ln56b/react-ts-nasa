type SidebarProps = {
  handleOpenSidebar: () => void;
};

export default function Sidebar({ handleOpenSidebar }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="bg-overlay" onClick={handleOpenSidebar}></div>
      <div className="sidbar-contents">
        <h2>Temp title 22</h2>
        <div>
          <p>Temp description</p>
          <p>dummy text</p>
        </div>
      </div>
      <button>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </aside>
  );
}
