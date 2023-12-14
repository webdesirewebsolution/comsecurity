
// mail
import { useState } from "react";
import { sendContactForm } from "../../lib/api";
import {
    useToast, Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";


const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

function Contactform() {
    const [state, setState] = useState(initState);
    const toast = useToast();
    const [touched, setTouched] = useState({});
    // const [msg, setMsg] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const { values, isLoading, error } = state;

    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));

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
            isLoading: true,
        }));

        try {
            await sendContactForm(values);
            // setMsg("Submitted")
            setShowSuccessMessage(true);
            // setTimeout(() => {
            //     setMsg("")
            // }, 3000)
            setTimeout(() => {
                // Hide the success message after 2 seconds
                setShowSuccessMessage(false);
            }, 3000);
            setTouched({});
            setState(initState);
            // toast({
            //     title: "Message sent.",
            //     status: "success",
            //     duration: 2000,
            //     position: "center",
            //     style: {
            //         color: "green", 
                    
            //     }
            // });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

    return (
        <div className="animate p-5 shadow-lg rounded-lg ">
            {error && (
                <Text color="red.300" my={4} fontSize="xl">
                    {error}
                </Text>
            )}
            <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                <FormLabel className="lbl font-semibold">Name</FormLabel>
                <Input
                    className="inpt rounded w-full"
                    type="text"
                    name="name"
                    errorBorderColor="red.300"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage className="text-red-700">Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                <FormLabel>Email</FormLabel>
                <Input
                    className="inpt rounded w-full"
                    type="email"
                    name="email"
                    errorBorderColor="red.300"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage className="text-red-700">Required</FormErrorMessage>
            </FormControl>

            <FormControl
                mb={5}
                isRequired
                isInvalid={touched.subject && !values.subject}
            >
                <FormLabel>Contact Number</FormLabel>
                <Input
                    className="inpt rounded w-full"
                    type="text"
                    name="subject"
                    errorBorderColor="red.300"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage className="text-red-700">Required</FormErrorMessage>
            </FormControl>

            <FormControl
                isRequired
                isInvalid={touched.message && !values.message}
                mb={5}
            >
                <FormLabel>Message</FormLabel>
                <Textarea
                    className="inpt rounded w-full"
                    type="text"
                    name="message"
                    rows={4}
                    errorBorderColor="red.300"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage className="text-red-700">Required</FormErrorMessage>
            </FormControl>

            <Button
                className="inpt rounded  btn btn-primary block w-full"
                variant="outline"
                colorScheme="blue"
                isLoading={isLoading}
                disabled={
                    !values.name || !values.email || !values.subject || !values.message
                }
                onClick={onSubmit}
            >
                Submit
            </Button>
          

            {showSuccessMessage && (
                <h6 className="my-4"  fontSize="xl" style={{color:"green"}}>
                Message sent.
            </h6>
            )}


        </div>
    )
}


export default Contactform;