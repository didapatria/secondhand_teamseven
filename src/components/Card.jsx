import axios from "axios";
import { useEffect, useState } from "react";

export default function Card(props) {
  const products = props.data;

  const [image, setImage] = useState([]);

  const getImage = async () => {
    try {
      const productId = 1;
      // const productId = products[i].id;
      const dataImage = await axios.get(
        `https://apisecondhand.herokuapp.com/api/product/${productId}/images`,
      );
      setImage(await dataImage.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

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
            src={image[0].imageUrl}
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
