export interface OnConfirmPopupProps {
  // Controls visibility of the confirmation popup
  isOpen: boolean;
  // Function triggered when user confirms logout
  ConfirmLogout: () => void;
  // Function triggered when user cancels the action
  onCancel: () => void;
}
