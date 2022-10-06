import { FillerDiv } from "../../components/fillerDiv/fillerDiv.component"




export const Company = ()=>{

    const divsToMap = [{
        header:"This is the first header for my mock company",
        text:"Here at Shortly, we aspire to definitely not be a clone of a much more popular application that we hate to bits. We aspire to bring to you the highest quality content. That is 100% unique.",
        link:"firstHeader",
        listName:"Section 1",
    },{
        header:"This is the second header for my mock company",
        text:"Here at Shortly, we aspire to definitely not be a clone of a much more popular application that we hate to bits. We aspire to bring to you the highest quality content. That is 100% unique.",
        link:"firstHeader",
        listName:"Section 2",
    },{
        header:"This is the third header for my mock company",
        text:"Here at Shortly, we aspire to definitely not be a clone of a much more popular application that we hate to bits. We aspire to bring to you the highest quality content. That is 100% unique.",
        link:"thirdHeader",
        listName:"Section 3",
    }]
    return(
   <FillerDiv items={divsToMap}/>
    )
}