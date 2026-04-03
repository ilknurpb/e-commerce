import { Link } from "react-router-dom";

function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      image: "/images/post-1.jpg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 2,
      image: "/images/post-2.jpg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 3,
      image: "/images/post-3.jpg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <section className="bg-white py-[112px]">
      <div className="mx-auto max-w-[1050px] px-4">
        <div className="mx-auto mb-[80px] max-w-[692px] text-center">
          <p className="mb-[10px] text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#23A6F0]">
            Practice Advice
          </p>

          <h2 className="mb-[10px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
            Featured Posts
          </h2>

          <p className="text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[300px] w-full object-cover"
                />

                <span className="absolute left-[20px] top-[20px] rounded-[3px] bg-[#E74040] px-[10px] py-1 text-[14px] font-bold leading-[24px] tracking-[0.2px] text-white shadow">
                  NEW
                </span>
              </div>

              <div className="p-[25px]">
                <div className="mb-[10px] flex gap-[15px] text-[12px] leading-[16px]">
                  <span className="text-[#8EC2F2]">{post.tags[0]}</span>
                  <span className="text-[#737373]">{post.tags[1]}</span>
                  <span className="text-[#737373]">{post.tags[2]}</span>
                </div>

                <h3 className="mb-[10px] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#252B42]">
                  {post.title}
                </h3>

                <p className="mb-[15px] text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#737373]">
                  {post.description}
                </p>

                <div className="mb-[25px] flex items-center justify-between text-[12px] leading-[16px] text-[#737373]">
                  <div className="flex items-center gap-[5px]">
                    <span className="text-[#23A6F0]">⏰</span>
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-[5px]">
                    <span className="text-[#23856D]">📊</span>
                    <span>{post.comments}</span>
                  </div>
                </div>

                <Link
                  to={`/post/${post.id}`}
                  className="inline-flex items-center gap-[10px] text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]"
                >
                  Learn More
                  <span className="text-[#23A6F0] text-lg">›</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;