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
    <>
      <img className="w-80" src={cover} alt="cover" />
      <div className="flex justify-between mt-4">
        <div className="flex ">
          <img className="w-14 rounded" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl ml-6">{author}</h3>
            <p className="ml-6">{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p className="text-orange-400">{hashtag}</p>
      <p className="mt-4 ml-2 mb-2">{write_blog}</p>
    </>
  );
}
