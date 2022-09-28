import { useState } from "react";

interface ICopyItemProps {
  originalLink: string;
  shortenedLink: string;
}
export const CopyItem = ({ originalLink, shortenedLink }: ICopyItemProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = async (string: string) => {
    if (isCopied) return;
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(shortenedLink);
      setTimeout(() => setIsCopied(false), 5000);
      return setIsCopied(true);
    }
  };
  return (
    <div className="flex flex-col justify-between px-4 bg-white lg:flex-row rounded-[10px] gap-4 py-4 flex-start lg:items-center">
      <p className="text-black border-b-1 border-b-slate-400">{originalLink}</p>
      <div className="flex flex-col items-start gap-4 lg:items-center lg:flex-row">
        <p className="text-[#2bd0d0]">{shortenedLink}</p>
        <div
          onClick={() => handleCopyClick(shortenedLink)}
          className={`rounded-[5px] py-2 text-white text-center px-4 self-center w-full transition-all ease-in-out min-w-[103px] ${isCopied ?'bg-[#3A3054]':'bg-[#2bd0d0] cursor-pointer hover:bg-[#9ae3e3]'}`}
        >
          {isCopied? 'Copied!':'Copy'}
        </div>
      </div>
    </div>
  );
};
