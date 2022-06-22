import { FiSearch } from "react-icons/fi";

export default function Categories() {
  return (
    <div className="space-y-4">
      <div className="font-bold">Telusuri Kategori</div>
      <div className="flex space-x-4 overflow-auto">
        <div className="flex items-center space-x-2 rounded-xl bg-purple-900 px-6 py-3 text-white">
          <FiSearch className="text-xl" />
          <div>Semua</div>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3">
          <FiSearch className="text-xl" />
          <div>Hobi</div>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3">
          <FiSearch className="text-xl" />
          <div>Kendaraan</div>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3">
          <FiSearch className="text-xl" />
          <div>Baju</div>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3">
          <FiSearch className="text-xl" />
          <div>Elektronik</div>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3">
          <FiSearch className="text-xl" />
          <div>Kesehatan</div>
        </div>
      </div>
    </div>
  );
}
