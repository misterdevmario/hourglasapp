import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const openModal = (e) => {setIsOpen(true); }
  const closeModal = () => setIsOpen(false);
  return [isOpen, closeModal, openModal];
};
