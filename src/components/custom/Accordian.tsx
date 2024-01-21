import {Accordion, AccordionItem} from "@nextui-org/react";

export default function CustAccordion({title, content }: { title: string, content:string }) {
  const defaultContent = content

  return (
    <Accordion className="bg-[#f1f1f1]"  defaultExpandedKeys={["1"]}>
      <AccordionItem
        className="bg-[#f1f1f1]"
        key="2"
        aria-label={title}
        title={title}
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
