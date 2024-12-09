import { useState } from "react";

function Tabs() {
  const data = [
    `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    " tab 2",
    "tab 3",
  ];
  const [content, setContent] = useState(data[0]);
  return (
    <>
      <div className="tabs  max-w-sm mx-auto mt-20">
        <div className="button flex w-full ">
          <button className="tab flex-1" onClick={() => setContent(data[0])}>
            Tab 1
          </button>
          <button className="tab flex-1" onClick={() => setContent(data[1])}>
            Tab 2
          </button>
          <button className="tab flex-1" onClick={() => setContent(data[2])}>
            Tab 3
          </button>
        </div>
        <div className="content text-sm text-center mt-10">{content}</div>
      </div>
    </>
  );
}

export default Tabs;
