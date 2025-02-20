interface TagBoxProps {
  id: number;
  name: string;
  isSelected?: boolean;
  onClick?: () => void;
  isSimple?: boolean;
  isDisabled?: boolean;
}

export const TagBox = ({
  id,
  name,
  isSelected,
  onClick,
  isSimple,
  isDisabled,
}: TagBoxProps) => {
  return (
    <>
      {isSimple ? (
        <button
          disabled={isDisabled}
          key={id}
          onClick={onClick}
          className={`px-[7px] py-[5px] rounded-[.5em] text-[#202020] dark:text-[#f1f0f1] opacity-80 text-[12px] uppercase tracking-wider
        ${isSelected ? "bg-[#D81159] text-[#f1f0f1] font-bold" : "cursor-pointer"}
      `}
        >
          {name}
        </button>
      ) : (
        <div
          key={id}
          className={`px-[7px] py-[5px] rounded-[7px] border-[1px] opacity-80`}
        >
          <h6 className="text-[12px] uppercase tracking-wider">
            {name}
          </h6>
        </div>
      )}
    </>
  );
};
