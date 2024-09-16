import BookMark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */
export default function Bookmarks({ bookMarks }) {
  return (
    <div className="md:w-1/3 ml-4 mt-2 bg-neutral-700">
      <h2 className="text-2xl text-white text-center">
        BookMark Blog : {bookMarks.length}
      </h2>
      {bookMarks.map((bookMark) => (
        <BookMark key={bookMark.id} bookMark={bookMark} />
      ))}
    </div>
  );
}
