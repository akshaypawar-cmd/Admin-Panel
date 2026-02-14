export const getStoredUsername = (): string | null => {
  return localStorage.getItem("username");
};
