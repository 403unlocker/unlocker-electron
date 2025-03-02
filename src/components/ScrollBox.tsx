import { twJoin } from "tailwind-merge";
import { ReactNode, UIEventHandler } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

type Props = {
  children?: ReactNode;
  scrollYOffset?: number;
  onScrollYPassed?: (isPassed: boolean) => void;
};

function ScrollBox(props: Props) {
  const { children, scrollYOffset = 0, onScrollYPassed } = props;

  const scrollHandler: UIEventHandler = (event) => {
    if (event.currentTarget.scrollTop > scrollYOffset) onScrollYPassed?.(true);
    else onScrollYPassed?.(false);
  };

  return (
    <ScrollArea.Root
      dir="rtl"
      type="scroll"
      scrollHideDelay={1000}
      className="overflow-hidden"
    >
      <ScrollArea.Viewport onScroll={scrollHandler} className="size-full grow">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="vertical"
        className={twJoin(
          "flex touch-none select-none bg-paper-light/50 p-0.5 rounded",
          "transition-colors duration-[160ms] ease-out hover:brightness-110",
          "data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5",
          "data-[orientation=horizontal]:flex-col",
        )}
      >
        <ScrollArea.Thumb
          className={twJoin(
            "relative flex-1 rounded-[10px] bg-primary/80 before:absolute",
            "before:left-1/2 before:top-1/2 before:size-full before:min-h-11",
            "before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2",
            "cursor-pointer",
          )}
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className={twJoin(
          "flex touch-none select-none bg-paper-light/50 p-0.5 rounded",
          "transition-colors duration-[160ms] ease-out hover:brightness-110",
          "data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5",
          "data-[orientation=horizontal]:flex-col",
        )}
      >
        <ScrollArea.Thumb
          className={twJoin(
            "relative flex-1 rounded-[10px] bg-primary/80 before:absolute",
            "before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px]",
            "before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2",
            "cursor-pointer",
          )}
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-paper-light rounded-full" />
    </ScrollArea.Root>
  );
}

export default ScrollBox;
