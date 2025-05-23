import { twJoin } from "tailwind-merge";
import { RiLink } from "react-icons/ri";
import { FiPower } from "react-icons/fi";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

import twMerge from "@/lib/tw-merge";
import { strictProtocol } from "@/lib/url";

type Props = {
  onChange: Dispatch<SetStateAction<string>>;
};

function LinkInput(props: Props) {
  const { onChange } = props;
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onChange(strictProtocol(inputValue));
  };

  return (
    <div className="mt-12">
      <h2 className="text-sm font-medium text-typo-0 mb-1">بررسی لینک</h2>
      <p className="text-xs text-typo-2">
        میتوانید لینک سایت یا لینک دانلود را برای بررسی وارد نمایید.
      </p>

      <form onSubmit={submitHandler} className="mt-5 flex items-stretch gap-3">
        <div className="relative grow">
          <RiLink
            size={16}
            className="absolute right-3.5 top-[13px] text-typo-1"
          />
          <input
            dir="ltr"
            value={inputValue}
            placeholder="... آدرس سایت"
            onChange={(event) => setInputValue(event.target.value)}
            className={twMerge(
              "bg-paper-light h-[42px] rounded-[10px] placeholder:text-typo-1",
              "text-sm w-full outline-transparent min-w-0 border border-solid",
              "border-icon-border pr-10 pl-2.5 transition-all placeholder:text-right",
            )}
          />
        </div>

        <button
          type="submit"
          disabled={!inputValue.trim()}
          className={twJoin(
            "h-[42px] flex items-center gap-2 shrink-0 bg-primary",
            "text-typo-primary px-4 rounded-[10px] cursor-pointer",
            "hover:brightness-110 active:brightness-95 transition-[filter]",
            "disabled:grayscale",
          )}
        >
          <span className="text-sm">برسی اتصال</span>
          <FiPower size={20} />
        </button>
      </form>
    </div>
  );
}

export default LinkInput;
