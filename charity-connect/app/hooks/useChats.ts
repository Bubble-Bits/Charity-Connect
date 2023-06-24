
import { useState } from 'react';

export function useChats() {
  const [showChats, setShowChats] = useState(false);

  const toggleChats = () => {
    setShowChats(!showChats);
  };

  return { showChats, toggleChats };
}