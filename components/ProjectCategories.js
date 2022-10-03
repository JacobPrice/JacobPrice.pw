export default function projectCategories(category) {
  return (
    <span
      key={category.id}
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    >
      {category.category}
    </span>
  );
}
