import config from "@config/config.json";
import Contactform from "./Contactform";
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
                        <Contactform />
                    </div>
                </div>
            </div>
         </section>
    );
};

export default Homecta;
