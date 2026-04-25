import { Link } from "react-router-dom";


function BlogCard({ post }) {
    return (
        <div className="w-full max-w-[344px] bg-white shadow-sm overflow-hidden">
            <div className="relative">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[200px] object-cover"
                />

                <span className="absolute top-5 left-5 bg-[#E74040] text-white text-xs font-bold px-2 py-1">
                    NEW
                </span>
            </div>

            <div className="px-[25px] pt-[25px] pb-[35px]">
                <div className="flex gap-[15px] text-xs mb-[10px]">
                    <span className="text-[#8EC2F2]">Google</span>
                    <span className="text-[#737373]">Trending</span>
                    <span className="text-[#737373]">New</span>
                </div>

                <h3 className="text-[20px] leading-[30px] font-normal text-[#252B42] mb-[10px]">
                    {post.title}
                </h3>

                <p className="text-[14px] leading-[20px] text-[#737373] mb-[25px]">
                    {post.description}
                </p>

                <div className="flex justify-between items-center text-[12px] text-[#737373] mb-[25px]">
                    <span>22 April 2021</span>
                    <span>10 comments</span>
                </div>

                <Link
                    to={`/blog/${post.id}`}
                    className="text-[14px] font-bold text-[#737373]"
                >
                    Learn More <span className="text-[#23A6F0]">›</span>
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;