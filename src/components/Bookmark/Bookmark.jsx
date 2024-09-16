/* eslint-disable react/prop-types */
export default function BookMark({ bookMark }) {
  const { title } = bookMark;
  return (
    <>
      <div className="bg-gray-900 p-4 m-4 rounded-3xl">
        <h3 className="text-xl text-sky-400 text-center">{title}</h3>
      </div>
    </>
  );
}
