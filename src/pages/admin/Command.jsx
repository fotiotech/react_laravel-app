const Command = () => {
    return (
        <div className="p-5">
            <h2 className=" text-2xl font-bold">Command</h2>
            <div className="flex justify-center items-center w-full h-full">
                <svg width='200' height='200' className="border">
                    {/* <circle
                        cx="100"
                        cy="60"
                        r="30"
                        stroke="green"
                        strokeWidth="10"
                        fill="#ffffff"
                    /> */}
                    
                    <path id="lineAB" d="M 50 100 A 40 40, 0, 0, 1, 170 1267
                    ]p0" stroke="green" strokeWidth='8' fill="none"></path>
                </svg>
            </div>
        </div>
    );
};

export default Command;
