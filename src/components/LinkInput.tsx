import { Dispatch, SetStateAction, useState } from "react";
import { FiPower } from "react-icons/fi";
import { RiLink } from "react-icons/ri";

type Props = {
  onChange: Dispatch<SetStateAction<string>>;
};

function LinkInput(props: Props) {
  const { onChange } = props;

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const ensureHttps = (url: string): string => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return "";
    
    // If URL has no protocol, add https://
    if (!trimmedUrl.match(/^[a-zA-Z]+:\/\//)) {
      return `https://${trimmedUrl}`;
    }
    
    // Replace http:// with https://
    if (trimmedUrl.startsWith('http://')) {
      return trimmedUrl.replace('http://', 'https://');
    }
    return trimmedUrl;
  };

  const isValidUrl = (url: string): boolean => {
    // Allow empty input without showing error
    if (!url.trim()) return true;
    
    // Check for at least one dot and no spaces after trimming
    const domainPattern = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    
    // Remove protocol if exists for domain validation
    const urlWithoutProtocol = url.replace(/^(https?:\/\/)/, '');
    
    return domainPattern.test(urlWithoutProtocol);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    
    if (!isValidUrl(value)) {
      setError("لطفا یک آدرس معتبر وارد کنید (مثال: http://docker.com, https://docker.com, docker.com)");
    } else {
      setError(null);
    }
  };

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
            placeholder="... آدرس سایت"
            onChange={(event) => handleInputChange(event.target.value)}
            className={`bg-paper-light h-[42px] rounded-[10px] placeholder:text-typo-1 text-sm w-full min-w-0 border border-solid border-icon-border pr-10 pl-2.5 transition-all placeholder:text-right focus:outline focus:outline-2 ${
              error ? 'outline outline-2 outline-red-500' : 'outline-transparent'
            }`}
            dir="ltr"
          />
          {error && (
            <p className="text-red-500 text-xs mt-1 text-right">{error}</p>
          )}
        </div>

        <button
          onClick={() => onChange(ensureHttps(inputValue))}
          disabled={!!error || !inputValue.trim()}
          className={`h-[42px] flex items-center gap-2 shrink-0 px-4 rounded-[10px] transition-all ${
            error || !inputValue.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary text-typo-primary cursor-pointer hover:brightness-110 active:brightness-95'
          }`}
        >
          <span className="text-sm">برسی اتصال</span>
          <FiPower size={20} />
        </button>
      </div>
    </div>
  );
}

export default LinkInput;
