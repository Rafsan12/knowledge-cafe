import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMark = (blog) => {
    // console.log(blog);
    const newBookMark = [...bookMarks, blog];
    setBookMarks(newBookMark);
  };
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleBookMark={handleBookMark} />
        <Bookmarks bookMarks={bookMarks} />
      </div>
    </>
  );
}

export default App;
