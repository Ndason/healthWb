


export default function TestCard ({img, title, description}){
    return (
        <div className="flex w-full lg:w-1/4 space-y-2 p-5 items-center flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="w-full">
                <img className="rounded-xl" src={img} alt="img" />
            </div>
            <div className="text-center">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}