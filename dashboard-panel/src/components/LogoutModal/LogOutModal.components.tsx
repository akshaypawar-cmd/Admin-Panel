import type React from "react";

import type { OnConfirmPopupProps } from "./logoutModal.types";

const LogOutModal: React.FC<OnConfirmPopupProps> = (props) => {
  const { isOpen,ConfirmLogout, onCancel } = props;
  if (!isOpen) return null;
  
  return (
    <>
      <div onClick={onCancel} />

      <div className=" bg-white rounded-xl shadow-xl max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">LogOut </h2>

        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="px-4 py-2 cursor-pointer rounded-lg border text-black bg-gray-500 border-gray-500 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={ConfirmLogout}
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-emerald-400 text-white cursor-pointer"
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default LogOutModal;
