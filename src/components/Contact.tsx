import Swal from "sweetalert2";
import { Button, Input, Textarea } from "@nextui-org/react";
import {  useState } from "react";
const fetchWithProxy = async (url: string, options: any) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return fetch(proxyUrl + url, options);
};
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
        } else if (data.target.name === "name") {
            setErros((prev) => ({
                ...prev,
                [data.target.name]: validateName(data.target.value)
            }))
        } else {
            setErros((prev) => ({
                ...prev,
                [data.target.name]: validateMessage(data.target.value)
            }))
        }
        if (errors.sender === false && errors.name === false && errors.message === false) {
            setNoErrors(false);
        }
        setMessageData((prev) => ({
            ...prev,
            [data.target.name]: data.target.value
        }))
    }
    const sendEmail = async (e: any) => {
        e.preventDefault();
        const res = await fetch(`https://corsproxy.io/?${encodeURIComponent('https://backend-pokeapi-2a1d.onrender.com/webhooks/sendEmail')}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sender: messageData.sender, message: messageData.message, name: messageData.name })
        })
        const data = await res.json();
        if(data.statusCode === 202){
            const toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                background: 'rgb(31 41 55)',
                color: '#fff',
            });
            toast.fire({
                icon: 'success',
                title: 'Se envio el mensaje correctamente',
                padding: '10px 20px',
            });
        }
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
                        onClick={(e) => {
                            sendEmail(e);
                        }}
                    >Enviar</Button>
                </div>
            </form>
        </>
    )
}
export default Contact;