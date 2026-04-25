import BlogCard from "../components/BlogCard";

const posts = [
  {
    id: 1,
    title: "Koudetat à la Maison #1 (L'intégrale)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    image: "https://picsum.photos/id/1031/344/300",
  },
  {
    id: 2,
    title: "Koudetat à la Maison #1 (L'intégrale)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    image: "https://picsum.photos/id/1067/344/300",
  },
  {
    id: 3,
    title: "Koudetat à la Maison #1 (L'intégrale)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    image: "https://picsum.photos/id/1011/344/300",
  },
  {
    id: 4,
    title: "Koudetat à la Maison #1 (L'intégrale)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    image: "https://picsum.photos/id/1015/344/300",
  },
  {
    id: 5,
    title: "Koudetat à la Maison #1 (L'intégrale)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    image: "https://picsum.photos/id/1025/344/300",
  },
  {
    id: 6,
    title: "Koudetat à la Maison #1 (L'intégrale)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    image: "https://picsum.photos/id/1080/344/300",
  },
];

function BlogPage() {
  return (
    <section className="bg-white px-4 py-[160px]">
      <div className="max-w-[1050px] mx-auto">
        <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[80px]">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;