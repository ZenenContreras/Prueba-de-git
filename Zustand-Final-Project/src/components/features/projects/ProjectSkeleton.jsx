const ProjectSkeleton = ({num}) => {
  return (
    <div key={num.index} className="flex flex-col gap-4 bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-800 animate-pulse">
      
      {/* Header: Título e Icono de Check */}
      <div className="border-b pb-4 border-gray-700 flex flex-col gap-4 flex-1">
        <div className="flex flex-row justify-between items-center">
          {/* Título */}
          <div className="h-6 bg-gray-700 rounded w-3/4"></div>
          {/* Checkbox Icon */}
          <div className="h-6 w-6 bg-gray-700 rounded"></div>
        </div>
        
        {/* Descripción (3 líneas de skeleton) */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-800 rounded w-full"></div>
          <div className="h-3 bg-gray-800 rounded w-5/6"></div>
          <div className="h-3 bg-gray-800 rounded w-4/6"></div>
        </div>
      </div>

      {/* Due Date Row */}
      <div className="flex justify-between items-center">
        <div className="h-3 bg-gray-800 rounded w-16"></div>
        <div className="h-3 bg-gray-700 rounded w-20"></div>
      </div>

      {/* Botón Ver Detalles */}
      <div className="h-12 bg-gray-800 rounded-lg w-full"></div>

      {/* Botón Delete */}
      <div className="h-12 bg-red-900/20 rounded-lg w-full"></div>
      
    </div>
  );
};

export default ProjectSkeleton;