import { Dispatch, SetStateAction, useState } from "react";
import { FiPower } from "react-icons/fi";
import { RiLink } from "react-icons/ri";

type Props = {
  onChange: Dispatch<SetStateAction<string>>;
};

function LinkInput(props: Props) {
  const { onChange } = props;

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="mt-12">
      <h2 className="text-sm font-medium text-typo-0 mb-1">بررسی لینک</h2>
      <p className="text-xs text-typo-2">
        میتوانید لینک سایت یا لینک دانلود را برای برسی وارد نمایید.
      </p>

      <div className="mt-5 flex items-stretch gap-3">
        <div className="relative grow">
          <RiLink size={16} className="absolute right-3.5 top-[13px] text-typo-1" />
          <input
            value={inputValue}
            placeholder="آدرس سایت..."
            onChange={(event) => setInputValue(event.target.value)}
            className="bg-paper-light h-[42px] rounded-[10px] placeholder:text-typo-1 text-sm w-full outline-transparent min-w-0 border border-solid border-icon-border pr-10 pl-2.5 transition-all"
          />
        </div>

        <button
          onClick={() => onChange(inputValue.trim())}
          className="h-[42px] flex items-center gap-2 shrink-0 bg-primary text-typo-primary px-4 rounded-[10px] cursor-pointer hover:brightness-110 active:brightness-95 transition-[filter]"
        >
          <span className="text-sm">برسی اتصال</span>
          <FiPower size={20} />
        </button>
      </div>
    </div>
  );
}

export default LinkInput;
