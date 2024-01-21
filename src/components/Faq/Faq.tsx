import CustAccordion from "../custom/Accordian"

export const FAQ = () => {
    return (
        <section>
            <h1 className="text-5xl text-center text-[#263238] font-bold mt-10">Frequently asked questions</h1>
            <p className="text-lg mb-8 text-center mt-4 opacity-60 px-2 md:px-10">A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do</p>
            <div className="lg:hidden">
            <CustAccordion title={'How do I get started?'} content={'Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide]'} />
            </div>
        <section id="FAQList" className="hidden lg:grid mt-10 grid-rows-3 grid-cols-1 lg:grid-cols-3 gap-10 text-[#263238]">
            <div className="p-4">
                <h2 className="text-2xl font-medium">How do I get started?</h2>
                <p className="mt-8 opacity-70">Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].</p>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-medium">How do I get started?</h2>
                <p className="mt-8 opacity-70">Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].</p>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-medium">How do I get started?</h2>
                <p className="mt-8 opacity-70">Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].</p>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-medium">How do I get started?</h2>
                <p className="mt-8 opacity-70">Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].</p>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-medium">How do I get started?</h2>
                <p className="mt-8 opacity-70">Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].</p>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-medium">How do I get started?</h2>
                <p className="mt-8 opacity-70">Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].</p>
            </div>
        </section>
        </section>
    )
}