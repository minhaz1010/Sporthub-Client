import { Link } from "react-router-dom";
import Rating from "react-rating";
import { Product } from "./FeaturedProduct";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="p-3 rounded-lg shadow-md overflow-hidden transition-transform duration-300 flex flex-col gap-2 hover:scale-105">
      <div>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className='flex flex-col gap-2'>
          <p className="text-lg  text-[#010E13] mb-2">{product.category}</p>
          <h3 className="text-lg font-semibold text-[#010E13] mb-2">{product.title}</h3>
          <div className="flex items-center mb-2">
            <Rating
              initialRating={product.rating.rate}
              readonly
              emptySymbol={<span className="text-gray-300">★</span>}
              fullSymbol={<span className="text-yellow-400">★</span>}
            />
            <span className="text-sm ml-2">({product.rating.count})</span>
          </div>
          <p className="text-sm text-gray-700 mb-4 line-clamp-3">{product.description}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-bold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
          <Link
            to={`/products/${product.id}`}
            // className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
            className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-xl text-sm p-4 text-center me-2 mb-2 '
          >
            View Details
          </Link>
          {/* <button
            // className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default ProductCard