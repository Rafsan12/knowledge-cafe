import { useEffect, useState } from "react";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsData = async () => {
      try {
        const res = await fetch("blogs.json");
        const result = await res.json();
        console.log(result);
      } catch (error) {
        setBlogs(error);
      }
    };
    blogsData();
  }, []);

  return <></>;
}
