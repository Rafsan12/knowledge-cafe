/* eslint-disable react/prop-types */
export default function Blog({ blog, handleBookMark, handleReadingTime }) {
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
      <img className="w-96 ml-12  rounded-xl" src={cover} alt="cover" />

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
          <div className="flex">
            <span className="text-gray-500 text-sm">
              {reading_time} min read
            </span>
            <button onClick={() => handleBookMark(blog)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={() => {
              handleReadingTime(reading_time);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
}
