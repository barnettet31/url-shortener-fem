export type IUrl = {
    shortLink:string;
    fullShortLink:string;
    originalLink:string;
    dateRequested:string;
}
export const handleURLShortenRequest = async function (url:string):Promise<IUrl>{
    try{
        
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const {result} = await response.json();
        console.log(result);
        return {
            shortLink:result.short_link,
            fullShortLink:result.full_short_link,
            originalLink:result.original_link,
            dateRequested:Date.now().toString()
        }
    }catch(e){
        throw e;
    }
}