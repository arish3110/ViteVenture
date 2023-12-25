import React, { useRef, useState } from "react";
import Card from "./card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is the background color of the card that will be dispalyed.",
      filesize: ".9MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" },
    },
    {
      desc: "Anything you can do it here,without any resctrictions.",
      filesize: "4MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Easy to Understand it and Implement it.",
      filesize: "15MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload ", tagColor: "blue" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
    >
      {/* <Card/> */}
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
