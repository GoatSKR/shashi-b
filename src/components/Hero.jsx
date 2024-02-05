export default function Hero() {
    return (
        <div className="bg-[#b0acad] bg-no-repeat bg-right bg-contain px-[10px] md:px-[70px] py-[180px]"
            style={{ backgroundImage: 'url("/static/images/shashib.jpg")' }}>
            <div className="flex flex-row justify-between"
            >
                <div>
                    <h1 className="font-OSWALD text-3xl md:text-5xl lg:text-8xl text-[#592627] mb-0">SHASHI B.</h1>
                    <h1 className="font-OSWALD text-3xl md:text-5xl lg:text-8xl text-[#284B69]">SINGH</h1>
                    <p className="font-sans text-[#284B69] text-md md:text-lg font-bold" >
                        If you enjoy the process of learning English <br/> it seems as if you're acquiring it
                    </p>
                </div>
            </div>
        </div>
    )
}