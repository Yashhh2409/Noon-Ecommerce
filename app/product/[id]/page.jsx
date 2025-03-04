"use client"; // Ensures it's a client component

import { useParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMoneyBillWave,
  faCreditCard,
  faCheckCircle,
  faStar,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "@/context/ShopContext";
import RotatingText from "@/components/RotatingText";
import { toast } from "react-toastify";

const ProductDetails = () => {


  const params = useParams();
  const productId = params?.id;

  const { products, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [hoverPreview, setHoverPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleCart = () => {
    addToCart(product._id);
    toast.success("Product Added to cart!");
  };

  useEffect(() => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image?.[0]?.src || "");
      setSelectedImage(foundProduct.image?.[0]?.src || "");
    }
  }, [productId, products]);

  if (!product)
    return <p className="text-center text-lg">⏳ Loading product details...</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-500 mb-4">
        Home &gt; {product?.category} &gt; {product?.subCategory}{" "}
        {product?.name}
      </nav>

      <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-6">
        {/* Left: Thumbnails & Main Image */}
        <div className="md:col-span-4 flex gap-4">
          {/* Thumbnails - Vertical */}
          <div className="flex flex-col gap-2">
            {product?.image?.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 border rounded-md cursor-pointer hover:opacity-75 transition-all ${
                  selectedImage === img.src ? "border-blue-500 border-2" : ""
                }`}
                onClick={() => {
                  setMainImage(img.src);
                  setSelectedImage(img.src);
                }}
              />
            ))}
          </div>

          {/* Main Image with Hover Preview */}
          <div
            className="relative"
            onMouseEnter={() => setHoverPreview(true)}
            onMouseLeave={() => setHoverPreview(false)}
          >
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full rounded-lg shadow-md"
            />

            {/* Large Hover Preview */}
            {hoverPreview && (
              <div className="absolute top-0 left-full ml-4 bg-white border rounded-lg shadow-lg p-2 z-10">
                <img src={mainImage.src} alt="Preview" className="w-48 h-48" />
              </div>
            )}

            {/* Add to Cart & Wishlist */}
            <div className="mt-6 flex gap-4">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
                onClick={handleCart}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-md flex items-center gap-2">
                <FontAwesomeIcon icon={faHeart} />
                Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Middle: Product Details */}
        <div className="md:col-span-4">
          <div className="flex justify-between mb-5">
            <h1 className="text-gray-400 font-bold">Apple</h1>
            <button className="text-blue-500 font-semibold border rounded-full p-1 px-2 shadow-lg">
              Show Variants
            </button>
          </div>

          <h1 className="text-2xl font-semibold text-gray-500">
            {product?.name}
          </h1>

          {/* Rating Stars */}
          <div className="flex items-center gap-2 text-gray-500 mt-2">
            <div className="text-gray-600 text-sm">
              Model Number : {product?.model || "Add here"}
            </div>{" "}
            |
            <span className="text-gray-600 flex gap-2 items-center">
              {product?.rating}{" "}
              <FontAwesomeIcon icon={faStar} className="text-green-500" />{" "}
              <p className="text-gray-600">({product?.reviews} Reviews)</p>
            </span>
          </div>

          {/* Price & Discounts */}
          <div className="mt-4">
            <p className="text-gray-500 line-through text-lg">
              AED {product?.originalPrice}
            </p>
            <p className="text-3xl font-bold text-green-600">
              AED {product?.price}
            </p>
            <p className="text-green-500 text-sm">
              Saving: {product?.discount}
            </p>
          </div>

          {/* Animated Component */}
          <RotatingText />

          {/* Delivery Information */}
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-block bg-yellow-300 text-black text-xs font-semibold mt-1 px-3 py-1 rounded-tl-xl rounded-bl-xl rounded-br-3xl">
              {product?.tag}
            </span>

            <div className="flex flex-col text-gray-700">
              <span className="font-bold text-xs">Get it Tomorrow</span>
              <span className="text-xs">
                Order in{" 2 "}
                {product?.deliveryTime} hours
              </span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-4">
            <p className="text-sm flex items-center gap-2">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-green-500"
              />
              <strong className="text-gray-500">Pay in 4 installments</strong>{" "}
              (AED {product?.installmentPrice})
            </p>
            <p className="text-sm flex items-center gap-2 mt-2 text-gray-500">
              <FontAwesomeIcon icon={faCreditCard} className="text-blue-500" />
              Earn <strong>AED {product?.cashback} Cashback</strong> with the
              noon One Credit Card.
            </p>
          </div>

          {/* Seller Information */}
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-500">
              Sold by <span className="text-blue-500">{product?.seller}</span>
            </h3>
            <div className="flex items-center gap-2 text-green-600 mt-2">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className="text-gray-600">
                {product?.sellerRating}% Positive Ratings
              </span>
            </div>
            <p className="text-sm text-gray-600">{product?.description}</p>
          </div>

          {/* Benefits */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500"
              />
              Free Returns
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500"
              />
              Trusted Shipping
            </div>
          </div>
        </div>

        {/* Right: Extra Services */}
        <div className="md:col-span-4 border p-4 rounded-lg shadow-md bg-white">
          {/* Product Info */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-700">
              Apple iPhone 16 Pro Max Case With MagSafe - Clear
            </h2>
            <div className="flex items-center space-x-2">
              <p className="text-xl font-bold text-gray-800">AED 145.00</p>
              <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
                express
              </span>
            </div>
          </div>

          {/* Warranty & Returns */}
          <div className="mt-2 text-sm text-gray-600 space-y-1">
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
              1 year warranty{" "}
              <span className="text-blue-500 cursor-pointer">Learn more</span>
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500"
              />
              Enjoy hassle-free returns with this offer.
              <span className="text-blue-500 cursor-pointer">Learn more</span>
            </p>
          </div>

          {/* Seller Info */}
          <div className="mt-4 p-3 border rounded-lg bg-gray-50">
            <p className="text-sm text-gray-600">
              Sold by{" "}
              <span className="text-blue-500 font-semibold">callmate</span>
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-yellow-300 text-black px-2 py-1 rounded text-xs font-bold">
                4.8★
              </span>
              <p className="text-gray-600 text-sm">85% Positive Ratings</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Brand warranty Japan spec
            </p>

            {/* Seller Highlights */}
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500"
                />
                Partner Since{" "}
                <span className="font-semibold text-gray-800">6+ Years</span>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500"
                />
                Item as Described{" "}
                <span className="font-semibold text-gray-800">90%</span>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500"
                />
                Great Recent Rating
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500"
                />
                Low Return Seller
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500"
              />
              Free Returns on eligible items
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTruck} className="text-blue-500" />
              Free shipping when you spend AED 100 and above on express items
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500"
              />
              Contactless delivery for prepaid orders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
