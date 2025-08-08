"use client";
import { useState } from "react";
import Icon from "./icon";

function FaqItem(props: {
  index: number;
  question: string;
  answer: string;
  visible?: boolean;
}) {
  return (
    <div className="faq-item">
      <h2 className="flex justify-between items-center cursor-pointer rounded-4xl p-2 pl-12 text-white bg-black">
        <span className="p-0 m-0">
          {props.index}. {props.question}
        </span>
        <span className="w-12 h-12 aspect-square bg-white flex justify-center items-center rounded-4xl text-black">
          <Icon name={props.visible ? "arrow-right" : "arrow-bottom"} />
        </span>
      </h2>
      {props.visible && (
        <p className="faq-answer ml-12 my-6 px-8 border-l-4 border-black">
          {props.answer}
        </p>
      )}
    </div>
  );
}

export function Faq({
  data,
}: {
  data?: { question: string; answer: string }[];
  onClick?: (index: number) => void;
}) {
  const [visibleMap, setVisibleMap] = useState<{ [key: number]: boolean }>({});

  function onclick(index: number) {
    setVisibleMap({
      ...visibleMap,
      [index]: !visibleMap[index],
    });
  }

  return (
    <div>
      <strong>
        <h1 className="text-center py-20 pt-12 text-4xl text-[#00726d]">
          Perguntas Frequentes (FAQ)
        </h1>
      </strong>
      <div className="faq-list gap-4 flex flex-col gap-4">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div
              onClick={() => onclick(index)}
              key={index}
              className="faq-item-container"
            >
              <FaqItem
                question={item.question}
                answer={item.answer}
                index={index + 1}
                visible={visibleMap[index]}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Faq;
