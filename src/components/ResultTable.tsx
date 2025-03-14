import { z } from "zod";
import { useMemo, useState } from "react";
import { twJoin } from "tailwind-merge";
import { RiCloudOffLine } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import ScrollBox from "./ScrollBox";

type Props = {
  link: string;
};

const validator = z.string().url();

function ResultTable(props: Props) {
  const { link: unsafeLink } = props;

  const [thBgEnabled, setThBgEnabled] = useState(false);
  const safeLink = useMemo(() => validator.safeParse(unsafeLink), [unsafeLink]);

  if (!safeLink.success)
    return (
      <div className="grow flex flex-col items-stretch overflow-auto">
        <div className="flex flex-col items-center my-auto">
          <RiCloudOffLine size={32} className="text-typo-0 mb-3" />
          <h3 className="text-sm mb-1 font-medium">نتیجه ای موجود نیست</h3>
          <p className="text-xs text-typo-2">
            برای نتیجه یک لینک را وارد کنید.
          </p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-stretch mt-16 grow overflow-hidden">
      <div className="flex items-center gap-1 mb-2">
        <AiFillThunderbolt size={14} className="text-primary" />
        <p className="text-typo-0 text-sm">نتایج</p>
      </div>
      <p className="text-xs font-medium text-typo-2 mb-8">
        اولین DNS بیشترین سرعت را دارد.
      </p>

      <ScrollBox onScrollYPassed={setThBgEnabled}>
        <table className="relative z-0 w-full">
          <thead>
            <tr
              className={twJoin(
                "text-sm text-typo-2 [&>th]:py-3 [&>th]:text-center",
                "[&>th]:font-normal [&>th]:border-b [&>th]:border-solid",
                "[&>th]:border-[#232323] [&>th]:first:pb-2 [&>th]:sticky",
                "[&>th]:top-0 z-[1] [&>th]:transition-colors [&>th]:duration-500",
                thBgEnabled && "[&>th]:bg-paper/50 [&>th]:backdrop-blur-md",
              )}
            >
              <th>#</th>
              <th>نام</th>
              <th>دی‌ان‌اس</th>
              <th>سرعت</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {new Array(20).fill(null).map((_, index) => (
              <tr
                key={index}
                className={twJoin(
                  "text-typo-0 text-sm [&>td]:py-3 [&>td]:border-b [&>td]:text-center",
                  "[&>td]:border-solid [&>td]:border-[#232323] last:[&>td]:border-b-0",
                )}
              >
                <td>{index + 1}</td>
                <td>شکن</td>
                <td>178.22.122.100</td>
                <td>25MB/s</td>
                <td className="text-success">آنلاین</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollBox>
    </div>
  );
}

export default ResultTable;
