interface IErrorPopUp {
    message:string;
    clearPopUp:()=>void;
}
export const ErrorPopUp = ({message, clearPopUp}:IErrorPopUp)=>{
    return(
        <div className="absolute top-0 z-50 flex items-center justify-center w-screen h-screen bg-black/50">
            <div className="w-11/12 h-auto max-w-xl px-4 py-4 rounded bg-neutral-50 [&>*]:mb-3">
                <h1 className="mb-4 text-3xl font-bold text-red-800">Error Occurred</h1>
                <p className="text-neutral-700 semi-bold">{message}</p>
                <button onClick={clearPopUp} className="px-4 py-2 font-semibold text-white bg-red-600 rounded hover:opacity-70"> Clear error</button>
            </div>
        </div>
    )
}