export default function Video() {
    return (
        <div class="bg-white flex flex-col justify-center items-center py-[80px] px-[20px] md:px-[100px]">
            <div class="text-center text-[#592627] font-extrabold font-ROBOTO text-4xl">
                <h1>Watch the Latest Video</h1>
            </div>

            <div class="mt-5 w-full md:w-3/4 h-auto ">
                <div class="aspect-video ">
                    <iframe class="w-full h-full " src="https://www.youtube.com/embed/c3u9_ifo6P8" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )

}