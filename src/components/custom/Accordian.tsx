import {Accordion, AccordionItem} from "@nextui-org/react";

export default function CustAccordion({title, content }: { title: string, content:string }) {
  const defaultContent = content

  return (
    <Accordion  defaultExpandedKeys={["1"]}>
      <AccordionItem
      className=""
        key="2"
        aria-label={title}
        title={title}
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
