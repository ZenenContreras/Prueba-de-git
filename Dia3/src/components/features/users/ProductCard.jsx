 function ProductCard({ user }) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="flex flex-col p-6 ">
            <div className="px-3 py-1 bg-blue-50 rounded-2xl mb-4">
                <h5 className="text-blue-400 text-sm font-bold">ID: {user.id}</h5>
            </div>
            <h1 className="font-bold text-xl text-blue-950 mb-1">{user.name}</h1>
            <h4 className="text-gray-400 mb-4">@{user.username}</h4>
            <h3 className="text-gray-400">📧 {user.email}</h3>
            <h3 className="text-gray-400 mb-4">🌐 {user.website}</h3>
            <button className="bg-blue-800 px-3 py-2 rounded-lg hover:cursor-pointer active:scale-95 duration-200"> Ver Perfil Completo</button>
        </div>
    </div>
  );
}

export default ProductCard