import { FillerDiv } from "../../components/fillerDiv/fillerDiv.component"

export const Features = ()=>{

    const divsToMap = [{
        header:"Fair Pricing",
        text:"Here at Shortly, we care about your money.",
        link:"firstHeader",
        listName:"Section 1",
    },{
        header:"Money Consciousness",
        text:"More specifically, we care about what your money can do for us! ",
        link:"firstHeader",
        listName:"Section 2",
    },{
        header:"Spend literally everything you have",
        text:"EVEN MORE SPECIFICALLY, We care about what we can spend your money on. Like a helicopter, helicopters are awesome.",
        link:"thirdHeader",
        listName:"Section 3",
    }]
    return(<FillerDiv items={divsToMap}/>)
}