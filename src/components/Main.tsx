import { Picture } from "../App";

type SidebarProps = {
  picture: Picture | null;
};

export default function Main({ picture }: SidebarProps) {
  return (
    <div className="img-container">
      <img
        src={picture?.hdurl || "src/assets/mars.png"}
        alt={picture?.title || "A Mars landscape"}
        className="bg-img"
      />
    </div>
  );
}
