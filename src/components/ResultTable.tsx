import { useMemo } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiCloudOffLine } from "react-icons/ri";
import { z } from "zod";

type Props = {
  link: string;
};

const validator = z.string().url();

function ResultTable(props: Props) {
  const { link: unsafeLink } = props;
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
    <div className="mt-16">
      <div className="flex items-center gap-1 mb-2">
        <AiFillThunderbolt size={14} className="text-primary" />
        <p className="text-typo-0 text-sm">نتایج</p>
      </div>
      <p className="text-xs font-medium text-typo-2 mb-8">
        اولین DNS بیشترین سرعت را دارد.
      </p>
      <table className="w-full">
        <thead>
          <tr className="text-sm text-typo-2">
            <th className="text-right font-normal">#</th>
            <th className="text-right font-normal">نام</th>
            <th className="text-right font-normal">DNS</th>
            <th className="text-right font-normal">سرعت</th>
            <th className="text-right font-normal">وضعیت</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-typo-0 text-sm">
            <td className="py-3">1</td>
            <td className="py-3">شکن</td>
            <td className="py-3">178.22.122.100</td>
            <td className="py-3">25MB/s</td>
            <td className="text-success py-3">آنلاین</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
