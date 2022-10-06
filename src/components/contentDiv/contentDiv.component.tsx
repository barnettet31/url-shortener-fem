interface IContentDivs  {
    header:string;
    text:string;
    
    }
export const ContentDivs = ({header, text, }:IContentDivs)=>{
    return(
        <div  className="w-4/5 px-4 py-4 mb-10 text-center rounded shadow-md lg:py-6 lg:text-left bg-slate-200">
            <h1 className="mb-4 text-bold text-underline text-[#2bd0d0]">{header}</h1>
            <p className="text-md">{text}</p>
        </div>
    )
};