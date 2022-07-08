export default function Card() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {data.map(() => (
        <div className="h-60 space-y-2 rounded bg-white p-2 shadow">
          <img
            src="../assets/images/product.jpg"
            alt=""
            className="h-3/5 w-full rounded object-cover"
          />
          <div className="space-y-1">
            <div>Jam Tangan Casio</div>
            <div className="text-xs text-gray-400">Aksesoris</div>
          </div>
          <div>Rp 250.000</div>
        </div>
      ))}
    </>
  );
}
