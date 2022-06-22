export default function Card() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {data.map(() => (
        <div className="h-60 space-y-2 p-2 shadow">
          <img
            src="https://s3-alpha-sig.figma.com/img/3c84/6779/39d7b07f426b421083b020dc5ca5dd16?Expires=1656288000&Signature=Y1i79EWSR8C~0YqX6Sod1JiqQ0h9uY~cFiF3nx7dnGwo8p32Yj-~JUhXjalasouI0virWgXecVhA0qvSzWxA05TfdIo70nOg-H0YwQIF-bpG57~BTiqz3OStnWlFM-LuJDlYi6yUTveuK51EKHovnqrlKAQ~yIrdtvv2356sM2RbhJWx-tbprkz7I4q~aKkhMGTB9R2o9aAWiBjl7nO0KC-tBTckasMagiEAErsgPLIciJnj5MPeVMrzindrKfysXIxn1ODDycPCYxQZMK91NjzmIC3u3S-DHn5DjTTxPzCzeWf6Gt-M6oVc9sAP0vzdcWlMXDzijvdACh2~zs8hQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            className="h-3/5 w-full rounded object-cover"
          />
          <div className="space-y-1 bg-white">
            <div>Jam Tangan Casio</div>
            <div className="text-xs text-gray-400">Aksesoris</div>
          </div>
          <div>Rp 250.000</div>
        </div>
      ))}
    </>
  );
}
