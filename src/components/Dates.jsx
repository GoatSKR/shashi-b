export default function Dates() {
    return (
        <div className="bg-[#353536] py-[100px]">
            <h1 className=" font-OSWALD text-3xl text-center">Upcoming Tour Dates</h1>
            <p className="font-OSWALD text-center text-lg text-[#346fa2] pt-[20px]">Tour Dates 2024</p>
            <div className="flex flex-col md:flex-row  md:justify-between py-[50px] px-[5%] md:px-[20%] pt-[90px]   transition-colors duration-300 mb-4 hover:text-[#612a2b]">
                <div className="relative text-center">
                    <p className="text-ROBOTOB text-8xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">4</p>
                    <p className="absolute text-OSWALD top-1/2  left-1/2 transform text-[16px] -translate-x-1/2 -translate-y-1/2">FEBRUARY</p>
                </div>
                <div><p className="text-OSWALD text-center pt-[40px] lg:pt-[5px] text-[16px]">PROVIDENCE, RI</p></div>
                <div><p className="text-OSWALD text-center pt-[8px] lg:pt-[5px] text-[16px]">PROVIDENCE PERFORMING ARTS CENTER</p></div>
                <div className="text-OSWALD text-center pt-[8px] lg:pt-[5px] text-[16px]">TICKETS</div>
            </div>
            <div className="border-b border-[#131414]  "  style={{ marginLeft: '15%', marginRight: '15%' }}></div>

            <div className="flex flex-col md:flex-row  md:justify-between py-[50px] px-[5%] md:px-[20%] pt-[90px]   transition-colors duration-300 mb-4 hover:text-[#612a2b]">
                <div className="relative text-center">
                    <p className="text-ROBOTOB text-8xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">5</p>
                    <p className="absolute text-OSWALD top-1/2  left-1/2 transform text-[16px] -translate-x-1/2 -translate-y-1/2">FEBRUARY</p>
                </div>
                <div><p className="text-OSWALD text-center pt-[40px] lg:pt-[5px] text-[16px]">PROVIDENCE, RI</p></div>
                <div><p className="text-OSWALD text-center px-[100px] pt-[8px] lg:pt-[5px] text-[16px]">SNHU ARENA</p></div>
                <div className="text-OSWALD text-center pt-[8px] lg:pt-[5px] text-[16px]">TICKETS</div>
            </div>
            <div className="border-b border-[#131414]  "  style={{ marginLeft: '15%', marginRight: '15%' }}></div>
        

        </div >
    )
}