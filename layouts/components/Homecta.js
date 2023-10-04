import config from "@config/config.json";
// import Banner from "./components/Banner";
// import ImageFallback from "./components/ImageFallback";

const Homecta = () => {
    //   const { frontmatter } = data;
    //   const { title } = frontmatter;

    return (
        <section className="section ">
           
            <div className="container ">
                <div className=" row items-center justify-center">
                    <div className="animate lg:col-5">
                        <div>
                            <h3>
                                HOW WE AUDIT SECURITY
                            </h3>
                        </div>
                        <div className="mt-5">
                            <p>
                                • Understand operation, risks and los history.<br />
                                • Identification of vulnerabilities and weaknesses in existing security systems.<br />
                                • Carry out threat assessment of internal
                                and external environmen at various sites.<br />
                                • Critical appraisal of the current security policy, plans, procedures,  programs and physical security policy, plans, procedures, programs and physical security measures  being adopted to address the risks/threats.<br />
                                • Determination of residual risks and making      detailed recommendations to establish a level of security that plugs various
                                loopholes in an effective, efficient and cost       effective manner.
                            </p>
                        </div>
                    </div>
                    <div className="animate lg:col-5">
                        <form
                            method="POST"
                            action={config.params.contact_form_action}
                            className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
                        >
                            {/* <h2 className="h4 mb-6">Send A Message</h2> */}
                            <div className="mb-6">
                                <label
                                    className="mb-2 block font-medium text-dark"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="form-input w-full"
                                    name="name"
                                    placeholder="Full Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="mb-2 block font-medium text-dark"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="form-input w-full"
                                    name="email"
                                    placeholder="Email Address"
                                    type="email"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="mb-2 block font-medium text-dark"
                                    htmlFor="subject"
                                >
                                    Contact Number
                                </label>
                                <input
                                    className="form-input w-full"
                                    name="subject"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="mb-2 block font-medium text-dark"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea className="form-textarea w-full" rows="6" />
                            </div>
                            <button className="btn btn-primary block w-full">
                                Send Me Quote
                            </button>
                        </form>
                    </div>
                </div>
            </div>
         </section>
    );
};

export default Homecta;
