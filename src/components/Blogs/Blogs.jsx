import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsData = async () => {
      try {
        const res = await fetch("blogs.json");
        const result = await res.json();
        setBlogs(result);
      } catch (error) {
        console.log(error);
      }
    };
    blogsData();
  }, []);

  return (
    <div className="md:w-2/3">
      <h2 className="text-4xl">Blogs: {blogs.length}</h2>
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
