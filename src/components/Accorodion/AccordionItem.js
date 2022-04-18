import React from "react";

const AccordionItem = ({ qs ,onToggle , active}) => {

  
    const {question , answer } = qs
    console.log(active);

  return (
    <li className={active ? 'bg-tomato_light text-white' : 'bg-primary_black '}>
      <button onClick={onToggle } className="button  w-full text-white text-left p-3 text-xl flex justify-between">
        {question}
        <span className="control text-3xl">
          {active ? '-' : '+'}
        </span>
      </button>
      <div className={active ? 'answer_wrapper  bg-dark_gray p-4 open text-primary_black' : 'answer_wrapper  bg-dark_gray p-4'}>
        <div className="answer ">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;