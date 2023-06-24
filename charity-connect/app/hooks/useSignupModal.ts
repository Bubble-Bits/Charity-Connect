import { create } from "zustand";

interface SignupModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSignupModal = create<SignupModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSignupModal;
