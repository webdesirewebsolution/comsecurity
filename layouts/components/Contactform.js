
// mail
import { useState } from "react";
import { sendContactForm } from "../../lib/api";


const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

function Contactform() {
    const [state, setState] = useState(initState);
    // const toast = useToast(); 
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    // const onBlur = ({ target }) =>
    //   setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onSubmit = async () => {
        console.log(values);
        setState((prev) => ({
            ...prev,
            // isLoading: true,
        }));
        await sendContactForm(values)
        //   try {
        //     await sendContactForm(values);
        //     setTouched({});
        //     setState(initState);
        //     toast({
        //       title: "Message sent.", 
        //       status: "success",
        //       duration: 2000,
        //       position: "top",
        //     });
        //   } catch (error) {
        //     setState((prev) => ({
        //       ...prev,
        //       isLoading: false,
        //       error: error.message,
        //     }));
        //   }
    };

    return (
        <div className="animate ">
            <form

                method="post" 
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
                        className="form-input w-full h-10"
                        type="text"
                        name="name"
                        // errorBorderColor="red.300"
                        value={values.name}
                        onChange={handleChange}
                        //   onBlur={onBlur}
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
                        className="form-input w-full h-10"
                        type="email"
                        name="email"
                        // errorBorderColor="red.300"
                        value={values.email}
                        onChange={handleChange}
                        //   onBlur={onBlur}
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
                        className="form-input w-full h-10"
                        type="text"
                        name="subject"
                        // errorBorderColor="red.300"
                        value={values.subject}
                        onChange={handleChange}
                        //   onBlur={onBlur}
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
                    <textarea className="form-textarea w-full" rows="3"
                        type="text"
                        name="message"
                        //  errorBorderColor="red.300"
                        value={values.message}
                        onChange={handleChange}
                    //  onBlur={onBlur}
                    />
                </div>
                <button className="btn btn-primary block w-full"
                    //  variant="outline"
                    //  colorScheme="blue"
                    //  isLoading={isLoading}
                     disabled={
                       !values.name || !values.email || !values.subject || !values.message
                     }
                    onClick={onSubmit}
                >
                    Send Me Quote
                </button>
            </form>
        </div>
    )
}


export default Contactform;