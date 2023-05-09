import { useState } from "react";

export default function useCounter(): [number, () => void] {
  const [count, setCount] = useState(0);

  const inc = () => setCount((count) => count + 1);

  return [count, inc];
}
