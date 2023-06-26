import useAuth from "@/firebase/AuthState";
import { create } from "zustand";

interface SignupModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const SignupHandler = () => {
  const user = useAuth();
  console.log(user);
  if (!user) {
    return true;
  } else {
    return false;
  }
};
const useSignupModal = create<SignupModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSignupModal;
