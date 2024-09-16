import profile from "../../../images/profile.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4  border-b-2 max-w-7xl mx-auto ">
      <h1 className="text-4xl font-bold">knowledge-Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
}
