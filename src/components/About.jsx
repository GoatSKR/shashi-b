export default function About() {
    return (
        <div className="relative">


            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("/static/images/shashlong.jpg")', filter: 'blur(2px)' }}></div>
            <div class="absolute inset-0 bg-[#000000] opacity-50"></div>
            <div className="p-[30px] relative z-10 flex flex-row">
                <div className="basis-1/2 ">
                    <img src="/static/images/shashlong.jpg" alt="shashi" />
                </div>
                <div className="basis-1/2 lg:mt-[10%] px-[60px] items-start">
                    <div className="text-left text-white font-extrabold font-ROBOTO  text-4xl">
                        <h1>About</h1>
                    </div>
                    <p className="mt-8">
                        Shashi Bhushan, founder of SBMB School of Language, is a dedicated
                        educator with a passion for enhancing English language proficiency
                        and business communication skills. His vision led to the establishment
                        of SBMB, a hub for comprehensive language education.
                    </p>
                    <p className="mt-3">
                        Shashi Bhushan's expertise extends to English language fluency, business
                        communication, personality development, interview preparation, and cross-cultural
                        communication.
                    </p>
                    <p className="mt-3">
                        He empowers individuals to excel in their personal and professional lives,
                        ensuring they can confidently navigate the globalized world with linguistic
                        competence and refined communication abilities. SBMB School of Language stands
                        as a testament to his commitment to excellence in education.
                    </p>
                </div>
            </div>


        </div>
    )
}