import clsx from "clsx";
import { InputProps, InputSize, InputShape, InputColor } from ".";
import { CiSearch } from "react-icons/ci";

const style: {
    base: string;
    sizes: Record<InputSize, string>;
    textSizes: Record<InputSize, string>;
    shapes: Record<InputShape, string>;
    borderSizes: Record<InputSize, string>;
    backgroundColors: Record<InputColor, string>;
  } = {

    // TODO: 디자인 시스템이 확정되면 변경될 CSS 값들
    base: "placeholder:text-gray-60 placeholder:font-bold border border-purple-main1 focus:outline-none caret-purple-main1",
    sizes: {
      xs: 'min-h-[40px] py-[6px] px-[10px] min-w-[707px]',
      md: 'min-h-[48px] py-[12px] px-[22px] min-w-[708px]',
      lg: 'min-h-[40px] py-[10px] px-[42px] min-w-[1072px]',
    },
    textSizes: {
      xs: 'text-body2 font-bold',
      md: 'text-body1 font-bold',
      lg: 'text-h2 font-bold',
    },
    shapes: {
      square: 'rounded',
      rounded: 'rounded-full',
    },
    borderSizes: {
     xs: 'border-0',
     md: 'border-1',
     lg: 'border-2',
    },
    backgroundColors: {
        purple: 'bg-purple-main5',
        white: 'bg-white'
    }
  };

export const PurPleInput = ({
    value,
    onChange,
    placeholder,
    onKeyDown,

    // style
    size,
    textSize,
    shape,
    borderSize,
    backgroundColors,

    // icon
    search

}: InputProps) => {
    return (
        <div className="relative">
            {search && (
                // TODO: 검색 아이콘 material icon으로
                <CiSearch size={30} className="absolute top-[9px] left-[9px]"></CiSearch>
            )}
            <input 
                type="text" 
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={placeholder} 
                className={
                    clsx(   
                        style.textSizes[textSize], 
                        style.base, 
                        style.shapes[shape], 
                        style.sizes[size], 
                        style.borderSizes[borderSize],
                        style.backgroundColors[backgroundColors],
                    )}
            >
            </input>
        </div>
    )
}

export default PurPleInput;