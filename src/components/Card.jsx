export default function Card(props) {
  const products = props.data;

  const currencyFormatter = (value) => {
    const formattedAmount = Math.trunc(value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    return (
      <>
        <span>Rp. </span>
        {formattedAmount}
      </>
    );
  };

  return (
    <>
      {products.map((key, i) => (
        <div className="h-60 space-y-2 rounded bg-white p-2 shadow" key={key}>
          <img
            src="../assets/images/product.jpg"
            alt=""
            className="h-3/5 w-full rounded object-cover"
          />
          <div className="space-y-1">
            <div>{products[i].name}</div>
            <div className="text-xs text-gray-400">
              {products[i].category.categoryName}
            </div>
          </div>
          <div>{currencyFormatter(products[i].price)}</div>
        </div>
      ))}
    </>
  );
}
