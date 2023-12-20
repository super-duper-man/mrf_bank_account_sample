import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useSidebar } from "../context/SidebarContext";

type IconProps = {
  id: number | string | undefined;
  open: number;
};

type AccordionProps = {
  headerIcon?: ReactNode;
  headerText: ReactNode;
  body?: ReactNode;
};

function Icon({ id, open }: IconProps) {
  const { display: displaySidebar } = useSidebar();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${displaySidebar && "hidden"} ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function SideAccordion({
  headerIcon,
  headerText,
  body,
}: AccordionProps) {
  const [open, setOpen] = React.useState(0);
  const { display: displaySidebar } = useSidebar();

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Accordion
      open={open === 1}
      icon={<Icon id={1} open={open} />}
      placeholder={undefined}
    >
      <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined}>
        {headerIcon ? (
          <div className="flex gap-2 items-center">
            {headerIcon}
            <span
              className={`${
                displaySidebar && "hidden"
              } transition-all text-base`}
            >
              {headerText}
            </span>
          </div>
        ) : (
          <div className={`${displaySidebar && "hidden"} transition-all`}>
            {headerText}
          </div>
        )}
      </AccordionHeader>
      <AccordionBody>{body}</AccordionBody>
    </Accordion>
  );
}
