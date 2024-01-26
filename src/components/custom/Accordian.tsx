import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { TbMinusVertical } from "react-icons/tb";

export default function CustAccordion({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const defaultContent = content;

  return (
    <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
      <AccordionItem
        className="bg-[#f1f1f1] m-1 "
        key="2"
        indicator={({ isOpen }) => (isOpen ? <TbMinusVertical /> : <FaPlus />)}
        aria-label={title}
        title={title}
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
