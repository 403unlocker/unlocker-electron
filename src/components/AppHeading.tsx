import { FaXTwitter, FaGithub } from "react-icons/fa6";
import LogoSrc from "@/assets/images/logo.png";

const BUTTON_CS =
  "p-2 rounded-lg text-icon bg-icon-bg border border-solid " +
  "border-icon-border cursor-pointer";

function AppHeading() {
  return (
    <header className="flex items-center gap-2">
      <img src={LogoSrc} alt="logo" />
      <h1 className="font-black text-base mt-1">۴۰۳،آنلاکر</h1>

      <a href="#" className={`mr-auto ${BUTTON_CS}`}>
        <FaXTwitter size={14} />
      </a>
      <a href="#" className={`mr-1 ${BUTTON_CS}`}>
        <FaGithub size={14} />
      </a>
    </header>
  );
}

export default AppHeading;
