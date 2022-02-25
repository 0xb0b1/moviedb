import { HiXCircle } from "react-icons/hi";
import { useFilter } from "../../hooks/useFilter";
// import { activeFilter, handleEnableFilter } from "../../hooks/activeFilter";

interface IProps {
  id: number;
  name: string;
}

export const FilterButton = ({ id, name }: IProps) => {
  const { filterName, activeFilter, handleEnableFilter } = useFilter();

  console.log(filterName);
  return (
    <button
      type="button"
      key={id}
      onClick={() => handleEnableFilter(name)}
      style={{
        backgroundColor: activeFilter ? "#D18000" : "",
        color: activeFilter ? "white" : "",
      }}
      value={name}
    >
      <span>{name}</span>
      {activeFilter && <HiXCircle />}
    </button>
  );
};
