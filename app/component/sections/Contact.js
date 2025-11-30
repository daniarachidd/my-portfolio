'use client'
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import LineBreak from "../LineBreak";
import contact from "@/app/data/contact.json";
import ContactCard from "../ContactCard";
import Lottie from "lottie-react";
import message from "@/public/lottie/message.json";
const Contact = () => {
    
    return (
        <section id="contact" className="max-w-5xl px-10 mx-auto my-20" >
            <div className="mb-12">
                <h2 className="text-3xl text-neutral-100 font-bold mb-2 text-center md:text-left">Get In Touch</h2>
                <LineBreak />
            </div>

            <div className="flex flex-col md:flex-row justify-between">
                <div className="space-y-2 text-center md:text-left">
                    <h1 className="text-xl font-bold text-gradient"> Contact Information </h1>
                    <ContactCard title="Email" data={contact.email} icon={FiMail} />
                    <ContactCard title="Phone" data={contact.phone} icon={FiPhone} />
                    <ContactCard title="Location" data={contact.location} icon={FiMapPin} />



                </div>


                <div className="hidden md:flex flex-1 justify-end items-end">
                    <Lottie animationData={message} loop={true} className="w-64 h-64" />
                    {/* <div className="w-64 h-64 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-400 rounded-3xl animate-blob opacity-70 shadow-xl"></div> */}
                </div>

            </div>



        </section>
    );
}
export default Contact;