export default function About2() {
    return (
        

        <div className="relative">
            <div className="flex flex-col md:flex-row md:justify-between bg-[#b0acad] ">
                <div class="absolute inset-0 md:bg-gradient-to-b from-[#b0acad] to-transparent h-1/5"></div>
                <div class="absolute inset-0 md:bg-gradient-to-t from-[#b0acad] to-transparent"></div>

                <div className="px-[30px] md:px-[70px] pt-[20px] md:pt-[70px] pb-[20px] md:pb-[60px]">
                    <div className="w-[300px] md:w-[600px]">
                        <h1 className="font-OSWALD text-lg md:text-2xl text-[#592627] mb-0 relative">
                            Thoughts Empowering Minds
                        </h1>

                        <p className="font-sans text-[#284B69] text-sm md:text-lg font-bold mt-3 relative">
                            Shashi Bhushan underscores the vital importance of English proficiency in our interconnected world.
                            He emphasizes how mastering English enhances communication skills, granting individuals the clarity
                            and confidence needed for personal and professional success. Bhushan highlights that beyond vocabulary,
                            it's about mastering nuanced expression for professional distinction. Moreover, English offers access to
                            a vast wealth of knowledge, crucial for career advancement. As job markets increasingly demand English fluency,
                            it provides a competitive edge and global opportunities. Bhushan sees it as a tool for cross-cultural
                            understanding, promoting unity in a diverse world. He notes that English expands one's reach in the digital
                            age, enabling broader communication. Ultimately, Bhushan views learning English as an investment in personal
                            growth and global citizenship, empowering individuals for success.
                        </p>
                    </div>
                </div>

                <div className="invisible lg:visible bg-no-repeat bg-right bg-contain w-full md:w-1/2"
                    style={{ backgroundImage: 'url("/static/images/shash2.png")' }}>
                </div>
            </div>
        </div>


    )
}