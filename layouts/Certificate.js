import Image from 'next/image'


const Certificate = ({ }) => {

    return (
        <>
            <div className="pagehding-sec">
                <div className="pagehding-overlay"></div>
                <div className="container container1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-heading">
                                <h1 className="text-white">CIRTIFICATE</h1>
                                <ul className="text-white">
                                    <li className="topli"><a href="/">Home</a></li>
                                    <li><a href="">Cirtificate</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='section container'>

                <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                    {/* <div class="-m-1 flex flex-wrap md:-m-2"> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-0.5 ">
                        {/* <div class="flex w-1/3 flex-wrap"> */}
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/comsecurity/k9.jpg" />
                        </div>
                        {/* </div> */}
                        {/* <div class="flex w-1/3 flex-wrap"> */}
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/comsecurity/haryana.jpg" />
                        </div>
                        {/* </div> */}
                        {/* <div class="flex w-1/3 flex-wrap"> */}
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/comsecurity/up.jpg" />
                        </div>
                        {/* </div> */}
                        {/* <div class="flex w-1/3 flex-wrap"> */}
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/comsecurity/udyam3.png" />
                        </div>
                        {/* </div> */}
                        {/* <div class="flex w-1/3 flex-wrap"> */}
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/comsecurity/rec.jpg" />
                        </div>
                        {/* </div> */}

                        
                        {/* <div class="flex w-1/3 flex-wrap">
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                            </div>
                        </div> */}
                    </div>
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}

export default Certificate;