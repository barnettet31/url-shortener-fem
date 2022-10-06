import { ContentDivs } from "../contentDiv/contentDiv.component";

interface IArrayDivContent extends Array<DivContent> {
    
}
interface DivContent {
    header:string;
    text:string;
    link:string;
    listName:string;
}
interface IFillerDivProps {
    items:IArrayDivContent;
}

export const FillerDiv = ({items}:IFillerDivProps)=>{
    return(     <main className="flex flex-col items-center justify-center py-4">
            
    {items.map((contentObject:DivContent)=>{
     return(<ContentDivs key={contentObject.header} header={contentObject.header} text={contentObject.text} />)
    })} 
 </main>)
}