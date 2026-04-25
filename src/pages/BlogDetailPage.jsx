import { useParams } from "react-router-dom";

function BlogDetailPage() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Blog Detail #{id}</h1>
      <p className="mt-4 text-gray-600">
        Bu sayfa seçilen blogun detay sayfası olacak.
      </p>
    </div>
  );
}

export default BlogDetailPage;