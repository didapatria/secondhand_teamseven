import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../../components/StatusBar";
import Navbar from "../../components/Navbar";
import { updateProduct, deleteProduct } from "../../actions/product";
import ProductService from "../../services/product.service";

export default function UpdateProductPage(props) {
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

  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);

  console.log("currentProduct: ", currentProduct);

  const dispatch = useDispatch();

  // const getProduct = (id) => {
  //   ProductService
  //     .get(id)
  //     .then((response) => {
  //       setCurrentProduct(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {
  //   getProduct(props.match.params.id);
  // }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const updateStatus = (status) => {
    const data = {
      name: currentProduct.name,
      price: currentProduct.price,
      categoryId: currentProduct.categoryId,
      description: currentProduct.description,
      images: currentProduct.productImages.imageUrl,
      address: currentProduct.address,
    };

    dispatch(updateProduct(currentProduct.id, data))
      .then((response) => {
        console.log(response);

        setCurrentProduct({ ...currentProduct, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateProduct(currentProduct.id, currentProduct))
      .then((response) => {
        console.log(response);

        setMessage("The product was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const removeProduct = () => {
  //   dispatch(deleteProduct(currentProduct.id))
  //     .then(() => {
  //       props.history.push("/");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

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
              {currentProduct ? (
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
                      value={currentProduct.name}
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
                      value={currentProduct.price}
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
                      value={currentProduct.categoryId}
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
                      value={currentProduct.description}
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
                  <div className="flex w-full items-center space-x-4 pt-2 text-center">
                    <div className="flex space-x-1">
                      <div>
                        <strong>Status:</strong>
                      </div>
                      <div>
                        {currentProduct.published ? "Published" : "Pending"}
                      </div>
                    </div>
                    <div>
                      {currentProduct.published ? (
                        <button
                          type="button"
                          className="rounded-2xl border border-purple-900 bg-white px-2 py-1 hover:bg-purple-900 hover:text-white hover:shadow-lg hover:shadow-purple-900/50"
                          onClick={() => updateStatus(false)}
                        >
                          UnPublish
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="rounded-2xl border bg-purple-900 px-2 py-1 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50"
                          onClick={() => updateStatus(true)}
                        >
                          Publish
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full space-x-4 pt-2 text-center">
                    <Link
                      // to={`/seller/preview-product/${currentProduct.id}`}
                      to="/seller/preview-product"
                      className="w-1/2 rounded-2xl border border-purple-900 bg-white px-6 py-3 hover:bg-purple-900 hover:text-white hover:shadow-lg hover:shadow-purple-900/50"
                    >
                      Preview
                    </Link>
                    <button
                      type="button"
                      className="w-1/2 rounded-2xl border bg-purple-900 px-6 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50"
                      onClick={updateContent}
                    >
                      Terbitkan
                    </button>
                    <p>{message}</p>
                  </div>
                </>
              ) : (
                <div>
                  <br />
                  <p>Please click on a Product...</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
