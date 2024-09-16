import Profile from "../../../images/profile.png";

export default function Header() {
  return (
    <Header className="flex justify-between items-center p-4  border-b-2 ">
      <h1 className="text-4xl font-bold">knowledge-Cafe</h1>
      <img src={Profile} alt="" srcSet="" />
    </Header>
  );
}
