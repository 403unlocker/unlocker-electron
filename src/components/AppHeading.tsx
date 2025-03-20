import { FaXTwitter, FaGithub } from "react-icons/fa6";
import LogoSrc from "@/assets/images/logo.png";

const BUTTON_CS =
  "p-2 rounded-lg text-icon bg-icon-bg border border-solid " +
  "border-icon-border cursor-pointer";

const X_LINK = "https://x.com/403unlocker";
const GITHUB_LINK = "https://github.com/403unlocker/unlocker-electron";

function AppHeading() {
  const { api } = window;

  return (
    <header className="flex items-center gap-2">
      <img src={LogoSrc} alt="logo" />
      <h1 className="font-black text-base mt-1">۴۰۳،آنلاکر</h1>

      <button
        className={`mr-auto ${BUTTON_CS}`}
        onClick={() => api.openExternalLink(X_LINK)}
      >
        <FaXTwitter size={14} />
      </button>
      <button
        className={`mr-1 ${BUTTON_CS}`}
        onClick={() => api.openExternalLink(GITHUB_LINK)}
      >
        <FaGithub size={14} />
      </button>
    </header>
  );
}

export default AppHeading;
