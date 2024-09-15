import Profile from "../../../images/profile.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 mx-4 border-b-2 ">
      <h1 className="text-4xl font-bold">knowledge-Cafe</h1>
      <img src={Profile} alt="" srcSet="" />
    </div>
  );
}
