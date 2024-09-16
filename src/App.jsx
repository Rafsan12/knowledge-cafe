import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs />
        <Bookmark />
      </div>
    </>
  );
}

export default App;
