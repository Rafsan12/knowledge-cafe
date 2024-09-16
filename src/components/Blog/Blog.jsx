/* eslint-disable react/prop-types */
export default function Blog({ blog }) {
  const {
    title,
    cover,
    write_blog,
    hashtag,
    reading_time,
    posted_date,
    author_img,
    author,
  } = blog;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cover Image */}
      <img className="w-full " src={cover} alt="cover" />

      <div className="p-4">
        {/* Author Section */}
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-lg font-semibold">{author}</h3>
            <p className="text-gray-500">{posted_date}</p>
          </div>
        </div>

        {/* Title and Hashtag */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-orange-400 mb-2">{hashtag}</p>

        {/* Blog Content */}
        <p className="text-gray-700 mb-4">{write_blog}</p>

        {/* Reading Time and See More Button */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500 text-sm">{reading_time} min read</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
