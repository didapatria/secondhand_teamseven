import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../../components/StatusBar";
import Navbar from "../../components/Navbar";
import { createProduct } from "../../actions/product";

export default function InfoProductPage() {
  const title = "Lengkapi Detail Produk";
  const initialProductState = {
    name: "",
    price: "",
    categoryId: "",
    description: "",
    images: null,
    published: false,
    address: "",
  };

  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    if (name === "images") {
      setProduct({ ...product, images: event.target.files });
    }
  };

  const saveProduct = () => {
    const { name, price, categoryId, description, images, address } = product;

    dispatch(
      createProduct(name, price, categoryId, description, images, address),
    )
      .then((data) => {
        setProduct({
          name: data.name,
          price: data.price,
          categoryId: data.categoryId,
          description: data.description,
          images: data.images,
          published: data.published,
          address: data.address,
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getCategories = async () => {
    try {
      const dataCategories = await axios.get(
        "https://apisecondhand.herokuapp.com/api/categories",
      );
      setCategories(await dataCategories.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className="mx-auto w-11/12">
        <StatusBar />
      </div>
      <Navbar isInfo title={title} />
      <div className="mt-6 flex justify-center md:mt-10">
        <div className="hidden md:block md:w-3/5">
          <Link to="/">
            <FiArrowLeft className="text-2xl" />
          </Link>
        </div>
        <div className="absolute inset-0 inset-y-auto -z-10 mx-auto w-11/12 md:flex md:w-full md:justify-center">
          <div className="md:w-2/5">
            <form className="space-y-4">
              {submitted ? (
                <div>
                  <h4>You submitted successfully!</h4>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <div>Nama Produk</div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                      placeholder="Nama Produk"
                      required
                      value={product.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <div>Harga Produk</div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                      placeholder="Rp 0,00"
                      required
                      value={product.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <div>Kategori</div>
                    <select
                      name="categoryId"
                      id="categoryId"
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                      required
                      value={product.categoryId}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled selected hidden>
                        Pilih Kategori
                      </option>
                      {categories.map((category) => (
                        <option value={category.id}>
                          {category.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <div>Deskripsi</div>
                    <textarea
                      name="description"
                      id="description"
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                      placeholder="Contoh: Jalan Ikan Hiu 33"
                      required
                      value={product.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <div>Foto Produk</div>
                    <input
                      type="file"
                      name="images"
                      id="images"
                      required
                      onChange={handleInputChange}
                      multiple
                    />
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-3 text-2xl">
                      <FiPlus />
                    </div>
                  </div>
                  <div className="flex w-full space-x-4 pt-2 text-center">
                    <Link
                      to="/seller/preview-product"
                      className="w-1/2 rounded-2xl border border-purple-900 bg-white px-6 py-3 hover:bg-purple-900 hover:text-white hover:shadow-lg hover:shadow-purple-900/50"
                    >
                      Preview
                    </Link>
                    <button
                      type="button"
                      // to="/seller/list-product"
                      className="w-1/2 rounded-2xl border bg-purple-900 px-6 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50"
                      onClick={saveProduct}
                    >
                      Terbitkan
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
