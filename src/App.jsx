import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    // console.log(blog);
    const newBookMark = [...bookMarks, blog];
    setBookMarks(newBookMark);
  };

  const handleReadingTime = (id, time) => {
    const newReadingTime = readingTime + time;
    console.log(newReadingTime);
    setReadingTime(newReadingTime);

    const remainingBookMark = bookMarks.filter(
      (bookMark) => bookMark.id !== id
    );
    setBookMarks(remainingBookMark);
  };
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto  h-screen overflow-y-auto">
        <Blogs
          handleBookMark={handleBookMark}
          handleReadingTime={handleReadingTime}
        />
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
