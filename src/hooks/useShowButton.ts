import { useState, useEffect } from "react";

export function useShowButton<T>({ data, maxDisplay }: { data: T[], maxDisplay: number }) {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setShowButtons(maxDisplay < data.length);
  }, [ data, maxDisplay ] );

  return showButtons;
}