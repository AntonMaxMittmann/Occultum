import icon from "../assets/Occultum Icon Light.png";
export default function Header() {
  return (
    <div className="flex justify-start items-center bg-blue-800 p-5">
      <img src={icon} alt="" className="h-10 mr-3" />
      <h1 className="text-xl">Occultum</h1>
    </div>
  );
}
