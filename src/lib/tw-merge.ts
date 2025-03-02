import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      font: ["body"],
      color: [
        "paper",
        "paper-light",
        "primary",
        "success",
        "typo-0",
        "typo-1",
        "typo-2",
        "typo-primary",
        "icon",
        "icon-border",
      ],
    },
  },
});

export default twMerge;
