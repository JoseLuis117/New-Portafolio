import { Button, Input, Textarea } from "@nextui-org/react";
import { useMemo, useState } from "react";

const Contact = () => {
    function validateEmail(value: string) {
        const validate = value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
        if (validate !== null) {
            return false;
        }
        return true;
    }
    function validateName(value: string) {
        return value.length > 3 ? false : true;
    }
    function validateMessage(value: string) {
        return value.length > 10 ? false : true;
    }
    const [messageData, setMessageData] = useState({
        sender: "",
        message: "",
        name: ""
    })
    const [errors, setErros] = useState({
        sender: undefined,
        message: undefined,
        name: undefined
    })
    const [noErrors, setNoErrors] = useState(true);

    const handleChange = (data: any) => {
        if (data.target.name === "sender") {
            setErros((prev) => ({
                ...prev,
                [data.target.name]: validateEmail(data.target.value)
            }))
            console.log("validando email")
            console.log(validateEmail(data.target.value))
        } else if (data.target.name === "name") {
            setErros((prev) => ({
                ...prev,
                [data.target.name]: validateName(data.target.value)
            }))
            console.log("validando name")
            console.log(validateName(data.target.value))
        } else {
            setErros((prev) => ({
                ...prev,
                [data.target.name]: validateMessage(data.target.value)
            }))
            console.log("validando message")
            console.log(validateMessage(data.target.value))
        }
        console.log(errors);
        if (errors.sender === false && errors.name === false && errors.message === false) {
            setNoErrors(false);
        }
        setMessageData((prev) => ({
            ...prev,
            [data.target.name]: data.target.value
        }))
        console.log(messageData);
    }
    const sendEmail = async (e:any) => {
        e.preventDefault();
        console.log("Se mando")
        console.log(messageData);
        
        const res = await fetch("https://backend-pokeapi-2a1d.onrender.com/webhooks/sendEmail",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({sender:messageData.sender, message:messageData.message, name:messageData.name})
        })
        console.log("RES");
        const data = await res.json();
        console.log(data);
        /* const key = import.meta.env.PUBLIC_API_TOKEN;
        console.log(key);
        const mailerSend = new MailerSend({
            apiKey: key
        })
        const recipients = [new Recipient("sanchezmendozajoseluis9@gmail.com", "José Luis")];
        const variables = [
            {
                message: "Test"
            }
        ]
        const sentFrom = new Sender("generalzerokiller@gmail.com", "Luis");
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject("luis")
            .setHtml("<strong>This is the HTML content</strong>")
            .setText("This is the text content");
        const send = await mailerSend.email.send(emailParams);
        console.log("Enviado")
        console.log(send); */
    }
    return (
        <>
            <header className="px-8 pb-4 text-white border-b-1 border-gray-700 w-4/5 mr-96">
                <h2 className="text-3xl font-bold">Contáctame</h2>
            </header>
            <form className="px-8 mb-4 py-8 flex flex-col gap-4 h-full">
                <Input variant="bordered" color={`${errors.sender ? 'danger' : 'secondary'}`}
                    classNames={{
                        inputWrapper: "group-data-[focus=true]:border-principal group-data-[focus=true]:text-principal",
                        label: "text-white group-data-[focus=true]:text-principal"
                    }}
                    label="Tu Correo Electrónico"
                    placeholder="example@example.com"
                    startContent={<i className="fa fa-envelope" aria-hidden="true"></i>
                    }
                    type="email"
                    name="sender"
                    isInvalid={errors.sender ? true : false}
                    isRequired
                    onChange={handleChange}
                />
                <Input variant="bordered" color={`${errors.name ? 'danger' : 'secondary'}`}
                    classNames={{
                        inputWrapper: "group-data-[focus=true]:border-principal group-data-[focus=true]:text-principal",
                        label: "text-white group-data-[focus=true]:text-principal"
                    }}
                    label="Tu Nombre Completo"
                    placeholder="Ej. José Luis"
                    startContent={<i className="fa fa-user" aria-hidden="true"></i>}
                    type="text"
                    name="name"
                    isRequired
                    isInvalid={errors.name ? true : false}
                    onChange={handleChange}
                />
                <Textarea
                    variant="bordered"
                    label="Tu mensaje"
                    placeholder="Escribe tu mensaje"
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                    color={`${errors.message ? 'danger' : 'secondary'}`}
                    name="message"
                    isInvalid={errors.message ? true : false}
                    isRequired
                    classNames={{
                        inputWrapper: "group-data-[focus=true]:border-principal text-white",
                        label: "text-white group-data-[focus=true]:text-principal",
                        innerWrapper: "text-principal"
                    }}
                    onChange={handleChange}
                />
                <div className="">
                    <Button
                        type="submit"
                        variant="ghost"
                        color="secondary"
                        disabled={noErrors}
                        onClick={(e)=>{
                            sendEmail(e);
                        }}
                    >Enviar</Button>
                </div>
            </form>
        </>
    )
}
export default Contact;