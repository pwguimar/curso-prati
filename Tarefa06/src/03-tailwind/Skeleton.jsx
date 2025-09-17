// src/03-tailwind/Skeleton.jsx
const Skeleton = () => {
  return (
    <div className="overflow-hidden rounded border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* Skeleton da Imagem 1:1 */}
      <div className="relative w-full pt-[100%]">
        <div className="absolute inset-0 bg-gray-200 animate-pulse dark:bg-gray-700"></div>
      </div>
      <div className="p-3">
        {/* Skeleton do Título (2 linhas) */}
        <div className="mb-2 h-4 w-full rounded bg-gray-200 animate-pulse dark:bg-gray-700"></div>
        <div className="mb-2 h-4 w-3/4 rounded bg-gray-200 animate-pulse dark:bg-gray-700"></div>
        {/* Skeleton do Preço */}
        <div className="mb-2 h-3 w-1/2 rounded bg-gray-200 animate-pulse dark:bg-gray-700"></div>
        {/* Skeleton do Rating */}
        <div className="mb-2 h-3 w-1/3 rounded bg-gray-200 animate-pulse dark:bg-gray-700"></div>
        {/* Skeleton da Tag */}
        <div className="mb-3 h-5 w-1/4 rounded bg-gray-200 animate-pulse dark:bg-gray-700"></div>
        {/* Skeleton dos Botões */}
        <div className="flex flex-wrap gap-1">
          <div className="h-6 w-20 rounded bg-gray-200 animate-pulse dark:bg-gray-700"></div>
          <div className="h-6 w-20 rounded bg-gray-200 animate-pulse dark:bg-gray-700"></div>
          <div className="h-6 w-20 rounded bg-gray-200 animate-pulse dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;