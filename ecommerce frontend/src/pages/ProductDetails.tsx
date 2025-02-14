import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { Product } from '../types';

// Mock data - replace with actual API call
const MOCK_PRODUCT: Product = {
  id: '1',
  name: 'Premium Wireless Headphones',
  description: 'High-quality wireless headphones with noise cancellation. Experience crystal-clear sound and ultimate comfort with these premium headphones. Features include active noise cancellation, Bluetooth 5.0, and up to 30 hours of battery life.',
  price: 299.99,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  category: 'Electronics',
  stock: 10,
};

export default function ProductDetails() {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const product = MOCK_PRODUCT; // Replace with actual product fetch

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-700">{product.description}</p>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">
                Stock: {product.stock} units
              </span>
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              onClick={() => addItem(product)}
              className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}