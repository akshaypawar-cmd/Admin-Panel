import { useState } from "react";

import { useUpdateProduct, type ProductsResponse } from "@api";

interface Props {
  product: ProductsResponse;
  onClose: () => void;
}

const EditProduct = ({ product, onClose }: Props) => {
  const { mutate: updateProduct } = useUpdateProduct();
  const [formData, setFormData] = useState(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleSubmit = () => {
    updateProduct(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="px-8 py-6 border-b bg-gray-50 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Edit Product
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Update product details carefully.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-200 transition"
          >
            ✕
          </button>
        </div>

        <div className="px-8 py-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Product Title
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 
                focus:ring-2 focus:ring-slate-900 focus:border-slate-900
                transition-all duration-200 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 
                focus:ring-2 focus:ring-slate-900 focus:border-slate-900
                transition-all duration-200 outline-none"
              />
            </div>

            <div className=" space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 
                
                transition-all duration-200 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Price</label>
              <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 
                focus:ring-2 focus:ring-slate-900 focus:border-slate-900
                transition-all duration-200 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="px-8 py-6 border-t bg-gray-50 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-md border border-gray-300 
            text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-md bg-slate-900 text-white
            hover:bg-slate-800 transition font-medium shadow-sm"
          >
            Update Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
