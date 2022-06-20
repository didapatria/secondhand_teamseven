import { FiSearch } from "react-icons/fi";

export default function Categories() {
  return (
    <div className="space-y-4">
      <div className="font-bold">Telusuri Kategori</div>
      <div className="flex overflow-auto space-x-4">
        <div className="flex items-center bg-purple-900 text-white rounded-xl px-6 py-3 space-x-2">
          <FiSearch className="text-xl" />
          <div>Semua</div>
        </div>
        <div className="flex items-center bg-purple-200 rounded-xl px-6 py-3 space-x-2">
          <FiSearch className="text-xl" />
          <div>Hobi</div>
        </div>
        <div className="flex items-center bg-purple-200 rounded-xl px-6 py-3 space-x-2">
          <FiSearch className="text-xl" />
          <div>Kendaraan</div>
        </div>
        <div className="flex items-center bg-purple-200 rounded-xl px-6 py-3 space-x-2">
          <FiSearch className="text-xl" />
          <div>Baju</div>
        </div>
        <div className="flex items-center bg-purple-200 rounded-xl px-6 py-3 space-x-2">
          <FiSearch className="text-xl" />
          <div>Elektronik</div>
        </div>
        <div className="flex items-center bg-purple-200 rounded-xl px-6 py-3 space-x-2">
          <FiSearch className="text-xl" />
          <div>Kesehatan</div>
        </div>
      </div>
    </div>
  );
}
