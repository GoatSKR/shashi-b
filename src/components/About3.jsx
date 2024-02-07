export default function () {
    return (
        <div className="relative">

            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("/static/images/shashlong.jpg")', filter: 'blur(2px)' }}></div>
            <div class="absolute inset-0 bg-[#000000] opacity-50"></div>
            <div className="p-[30px] relative z-10 flex flex-col-reverse md:flex-row">
                <div className="basis-1/2 mt-[20px] md:mt-[0px] bg-[#b0acad]">
                    <img src="/static/images/shash3.png" alt="shashi" />
                </div>
                <div className="basis-1/2 lg:mt-[10%] px-[5px] md:px-[60px] items-start">
                    <div className="text-left text-white font-extrabold font-ROBOTO  text-4xl">
                        <h1>The Founder</h1>
                    </div>
                    <p className="mt-8">
                        Shashi Bhushan Singh is the founder and the teaching centre head of the SBMB School
                        of Language.
                    </p>
                    <p className="mt-3">
                        Shashi went to a public school and then studied at British Council. He studied with students
                        from all around the world.
                    </p>
                    <p className="mt-3">
                        Having invested more than 5 years in rigorous research on Business Communication Skills, Professional
                        Development, Leadership and Management, Strategic Management and Solution-Oriented Mechanism for Businesses.
                    </p>
                    <p className="mt-3">
                        Driven by a relentless curiosity, Shashi began his research and teaching career in 2020.
                    </p>
                </div>

            </div>
        </div>
    )
}