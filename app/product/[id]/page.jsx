"use client"; // Ensures it's a client component

import { useParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faCreditCard,
  faStar,
  faShoppingCart,
  faHeart,
  faAngleRight,
  faTruckFast,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "@/context/ShopContext";
import RotatingText from "@/components/RotatingText";
import { toast } from "react-toastify";
import Image from "next/image";
import ExtraServices from "@/components/ProductDetails/ExtraServices";
import FrequentlyBought from "@/components/ProductDetails/FrequentlyBought";
import Variants from "@/components/ProductDetails/Variants";
import ProductOverview from "@/components/ProductDetails/ProductOverview";

const ProductDetails = () => {
  const params = useParams();
  const productId = params?.id;

  const { products, addToCart, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [hoverPreview, setHoverPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const scrollToSection = () => {
    document.getElementById("Variants")?.scrollIntoView({ behavior: "smooth" });
  };

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
    <>
      <div className="max-w-8xl mx-auto p-4 lg:p-10 md:p-8 bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-4">
          Home &gt; {product?.category} &gt; {product?.subCategory}{" "}
          {product?.name}
        </nav>

        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-4 gap-6 h-auto">
          {/* Left: Thumbnails & Main Image */}
          <div className="md:col-span-4 flex gap-4 sm:h-auto md:h-fit md:sticky md:top-10">
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
                  <img
                    src={mainImage.src}
                    alt="Preview"
                    className="w-48 h-48"
                  />
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
          <div className="md:col-span-4 flex flex-col gap-2">
            <div className="flex justify-between mb-5">
              <h1 className="text-gray-400 font-bold">Apple</h1>
              <button
                onClick={scrollToSection}
                className="text-blue-500 font-semibold border rounded-full p-1 px-2 shadow-lg"
              >
                Show Variants
              </button>
            </div>

            <h1 className="text-2xl font-semibold text-gray-500">
              {product?.name}
            </h1>

            {/* Rating Stars */}
            <div className="flex items-center gap-2 text-gray-500">
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
            <div>
              <p className="text-gray-500 line-through text-lg">
                {currency} {product?.originalPrice}
              </p>
              <p className="text-3xl font-bold text-green-600">
                {currency} {product?.price}
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
              <div className="bg-red-200 w-full h-auto py-4 rounded-md flex items-center justify-between gap-2 px-4">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="text-blue-500"
                />
                <p className="text-sm text-gray-500">
                  Pay in 4 simple, interest free payments of{" "}
                  <span className="font-bold text-md text-gray-800">
                    {currency} 1,324.75
                  </span>
                </p>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-500"
                />
              </div>
            </div>

            {/* Cashback Offer */}
            <div className="bg-[#C2FA70] w-full h-auto py-6 rounded-md flex items-center justify-between gap-2 px-4">
              <FontAwesomeIcon icon={faCreditCard} className="text-blue-500" />
              <p className="text-gray-800 font-bold">
                Earn {currency} 264.95{" "}
                <span className="text-violet-500">CA$HBACK</span>{" "}
                <span className="text-gray-500 font-normal">
                  with the noon One Cred Card.
                </span>{" "}
                <span className="text-blue-700 underline">Apply now</span>{" "}
              </p>
            </div>

            {/* Promo Banner GIF */}
            <div className="mt-6 w-full h-auto rounded-lg bg-gray-50">
              <Image
                src={"/product_details_offer_banner.gif"}
                layout="responsive"
                width={500}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Offer Ticket */}
            <div className="relative flex items-center justify-between w-full p-4 bg-green-50 border-2 border-dashed border-[#38AE04] rounded-lg">
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src={"/icons-svg/coupon-discount-v2.svg"}
                    width={35}
                    height={35}
                  />
                </div>

                <div className="text-[#38AE04] font-bold">
                  <p>Extra 20% off!</p>
                  <p className="text-lg">CODE: AUTOAPPLIED OFFER</p>
                </div>
              </div>

              <div>
                <Image
                  src={"/icons-svg/coupon-details-rightarrow.svg"}
                  width={35}
                  height={35}
                />
              </div>
            </div>

            {/* Benifits */}
            <div className="w-full h-auto bg-white flex items-center justify-around gap-2 rounded-md shadow-sm py-5">
              <div className="w-auto h-auto flex flex-col justify-center items-center gap-2 px-5">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#FFF8EC] p-7">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="text-gray-800  text-3xl"
                  />
                </div>
                <p className="text-gray-600 font-semibold whitespace-pre-line text-center">
                  Delivery{"\n"}by noon
                </p>
              </div>

              <div className="w-auto h-auto flex flex-col justify-center items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#FFF8EC] p-7">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-gray-800 text-3xl"
                  />
                </div>
                <p className="text-gray-600 font-semibold whitespace-pre-line text-center">
                  High Rated{"\n"}seller
                </p>
              </div>

              <div className="w-auto h-auto flex flex-col justify-center items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#FFF8EC] p-7">
                  <FontAwesomeIcon
                    icon={faRotateLeft}
                    className="text-gray-800 text-3xl"
                  />
                </div>
                <p className="text-gray-600 font-semibold whitespace-pre-line text-center">
                  Low{"\n"}Returns
                </p>
              </div>

              <div className="w-auto h-auto flex flex-col justify-center items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#FFF8EC] p-7">
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    className="text-gray-800 text-3xl"
                  />
                </div>
                <p className="text-gray-600 font-semibold whitespace-pre-line text-center">
                  Cash on{"\n"}Delivery
                </p>
              </div>
            </div>

            <div id="Variants">
              <Variants />
            </div>
          </div>

          {/* Right: Extra Services */}
          <div className="md:col-span-4 border-l-[1px] p-4  overflow-y-auto scrollbar-hidden">
            <ExtraServices productId={productId} product={product} />
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-white mt-10 px-10 py-2">
        <FrequentlyBought
          productId={productId}
          product={product}
          mainImage={mainImage}
        />
      </div>

      <div className="w-full h-auto bg-white mt-10 px-10 py-2">
        <ProductOverview />
      </div>
    </>
  );
};

export default ProductDetails;
