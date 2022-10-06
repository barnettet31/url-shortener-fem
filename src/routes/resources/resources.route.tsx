import { FillerDiv } from "../../components/fillerDiv/fillerDiv.component"

export const Resources = ()=>{

    const divsToMap = [{
        header:"Simple documentation",
        text:"Here at shortly, we like to simplify our documentation.",
        link:"firstHeader",
        listName:"Section 1",
    },{
        header:"Easy to understand instructions",
        text:"Our instructions are easy to understand, and designed with the user specifically in mind.",
        link:"firstHeader",
        listName:"Section 2",
    },{
        header:"Innovative in our thoughts",
        text:"This is true BECAUSE there is no documentation and therefore it's the easiest to understand. And we do this because...well our users don't exist 😃",
        link:"thirdHeader",
        listName:"Section 3",
    }]
    return <FillerDiv items={divsToMap}/>
}