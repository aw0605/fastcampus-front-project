import * as React from "react";
import { useState } from "react";
import { clsx } from "clsx";
import { AccordionProps } from "./types";
import AccordionContext from "./AccordionContext";
import { accordionStyle } from "./style.css";

const Accordion = (props: AccordionProps, ref: React.Ref<HTMLDivElement>) => {
  const { defaultActiveItems = [], children, className, ...rest } = props;

  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetItem = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItem) => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ activeItems, setActiveItem: handleSetItem }}
    >
      <div {...rest} ref={ref} className={clsx([accordionStyle, className])}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const _Accordion = React.forwardRef(Accordion);
export { _Accordion as Accordion };
