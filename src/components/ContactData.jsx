export default function ContactData() {
    return (
        <div className="p-[20px] md:p-[100px] bg-black">
            <div className="flex items-left md:flex-row flex-col justify-center md:justify-between px-2">
                <div className="text-center md:text-left">
                    <p className="md:ml-[80px] text-[22px] font-OSWALD">
                        Business Inquiries
                    </p>
                    <p className="md:ml-[80px] mt-1 font-sans">
                        Please contact:
                    </p>
                    <p className="md:ml-[80px] font-sans ">
                        business@jordanbpeterson.com
                    </p>
                </div>
                <div className="text-center md:text-left mt-6 md:mt-0">
                    <p className="md:ml-[80px] text-[22px] font-OSWALD">
                        Media Inquiries
                    </p>
                    <p className="md:ml-[80px] mt-1 font-sans">
                        Please contact:
                    </p>
                    <p className="md:ml-[80px] font-sans">
                        media@jordanbpeterson.com
                    </p>
                </div>
                <div className="text-center md:text-left mt-6 md:mt-0">
                    <p className="md:ml-[80px] text-[22px] font-OSWALD">
                        Permissions & Rights
                    </p>
                    <p className="md:ml-[80px] mt-1 font-sans">
                        Please contact:
                    </p>
                    <p className="md:ml-[80px] font-sans">
                        mollie.glick@caa.com
                    </p>
                </div>
            </div>
        </div>
    )
}