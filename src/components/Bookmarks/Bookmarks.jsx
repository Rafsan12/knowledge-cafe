import BookMark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */
export default function Bookmarks({ bookMarks, readingTime }) {
  return (
    <div className="md:w-1/3 ml-4 mt-2 bg-neutral-700">
      <h1 className="text-3xl bg-gray-600 text-white  mb-4">
        Total Reading Time: {readingTime} minute
      </h1>
      <h2 className="text-2xl text-white text-center">
        BookMark Blog : {bookMarks.length}
      </h2>
      {bookMarks.map((bookMark) => (
        <BookMark key={bookMark.id} bookMark={bookMark} />
      ))}
    </div>
  );
}
