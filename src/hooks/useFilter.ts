import { useState } from "react";

export const useFilter = () => {
  const [activeFilter, setActiveFilter] = useState(false);

  function handleEnableFilter() {
    setActiveFilter(!activeFilter);
  }

  return { activeFilter, handleEnableFilter };
};
