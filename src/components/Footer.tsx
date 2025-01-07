type FooterProps = {
  handleOpenSidebar: () => void;
};

export default function Footer({ handleOpenSidebar }: FooterProps) {
  return (
    <footer>
      <div className="bg-gradient"></div>
      <div>
        <h2>Temp title</h2>
        <h1>APOD Project</h1>
      </div>
      <button onClick={handleOpenSidebar}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
