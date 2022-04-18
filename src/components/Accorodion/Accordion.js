import React, { useState } from "react";
import { faqs } from "./accordionData";
import AccordionItem from "./AccordionItem";




const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <>
    <div className="">

      <h3 className="text-center text-3xl uppercase mb-8">question answer</h3>

      <ul className="container mx-auto px-4 border-2 border-dark_blue p-2">
        {faqs.map((qs, i) => (
          <AccordionItem
            active={clicked === i}
            onToggle={() => handleToggle(i)}
            qs={qs}
          />
        ))}
      </ul>
    </div>
    </>
  );
};

export default Accordion;
