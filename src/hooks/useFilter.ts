import { useState } from "react";

export const useFilter = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [filterName, setFilterName] = useState("");

  function handleEnableFilter(filterText: string) {
    setActiveFilter(!activeFilter);
    setFilterName(filterText);
  }

  return { filterName, activeFilter, handleEnableFilter };
};
