/* eslint-disable @typescript-eslint/no-explicit-any */
import { FAQS } from "../../contanst";
import CustAccordion from "../custom/Accordian";

export const FAQ = () => {
  return (
    <section id="faq" className="mb-4 px-2">
      <h1 className="text-3xl text-center text-[#263238] font-bold mt-10">
        Frequent questions
      </h1>
      <p className="text-md text-center m-4 opacity-60 px-2 md:px-10">
        A lot of people don't appreciate the moment until it's passed. I'm not
        trying my hardest, and I'm not trying to do
      </p>
      <div className="lg:hidden m-4">
        {FAQS.faqs_for_students.map((item: any) => {
          return <CustAccordion title={item.title} content={item.content} />;
        })}
      </div>
      <section
        id="FAQList"
        className="hidden lg:grid  grid-rows-3 grid-cols-1 lg:grid-cols-3 gap-4 text-[#263238] p-4 mx-auto "
      >
        {FAQS.faqs_for_students.map((item: any) => {
          return (
            <div className="bg-[#f1f1f1] rounded-lg p-4">
              <h2 className="text-2xl font-medium">{item.title}</h2>
              <p className="mt-8 opacity-70">{item.content}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};
