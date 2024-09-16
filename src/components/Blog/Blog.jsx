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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={cover}
        alt="cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full border-2 border-gray-200"
              src={author_img}
              alt="Author"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{author}</h3>

              <p className="text-sm text-gray-500">{posted_date}</p>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            <span>{reading_time} min read</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2 hover:text-blue-500 transition-colors duration-200">
          {title}
        </h2>

        <p className="text-sm text-blue-600 mb-4">{hashtag}</p>

        <p className="text-gray-700">{write_blog}</p>
      </div>
    </div>
  );
}
