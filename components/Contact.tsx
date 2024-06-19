'use client'
import { SectionWrapper } from "@/hoc/SectionWrapper"
import { fadeIn, slideIn } from "@/utils/motions"
import { motion } from "framer-motion"
import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: ''
      });

    const handleChange = (e: any) => {
        const { name, value } = e.target; 
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(!formData.email.match(validEmailFormat)) {
            alert("Sorry, the email address is not valid.")
            setFormData({...formData, ['email']: ''})
            return
        }
        setLoading(true)
           
        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
            process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
            {
                from_name: formData.name,
                to_name: 'James',
                from_email: formData.email,
                to_email: process.env.NEXT_PUBLIC_EMAIL,
                meassage: formData.msg
            },
            process.env.NEXT_PUBLIC_PUBLIC_KEY

        )
        .then(() => {
            setLoading(false)
            alert('Thank you! The message is sent successfully. I will get back to you ASAP!')
            setFormData({name: '', email: '', msg: ''})
        }, (error) => {
            setLoading(false)
            alert('Oops, something went wrong. :(')
            console.log(error)
        })
    }
    return (
        <div className="w-full h-screen mb-10 mt-10">
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 0.5)}
            >
                <h1 className="text-[24px] font-bold text-color-5 text-center sm:pt-[80px] font-wenkai">Let&apos;s Get in Touch!</h1>
                <form 
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-10 flex flex-col gap-5 items-center"
                >
                    <label className="flex flex-col sm:w-1/2 w-full">
                        <span className="text-color-5 font-sans">Name</span>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="What's your name?" className="bg-white py-4 px-6 placeholder:text-gray-300 rounded-lg mt-1 text-color-5 " required/>
                    </label>

                    <label className="flex flex-col sm:w-1/2 w-full">
                        <span className="text-color-5 font-sans">Email</span>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="What's your email?" className="bg-white py-4 px-6 placeholder:text-gray-300 rounded-lg mt-1 text-color-5" required/>
                    </label>

                    <label className="flex flex-col sm:w-1/2 w-full">
                        <span className="text-color-5 font-sans">Message</span>
                        <textarea rows={7} name="msg" value={formData.msg} onChange={handleChange} placeholder="What do you want to say?" className="bg-white py-4 px-6 placeholder:text-gray-300 rounded-lg mt-1 text-color-5" required/>
                    </label>
                    <button
                        type="submit"
                        className="bg-white px-8 py-3 outline-none w-fit font-bold shadow-md text-color-5 rounded-xl hover:-translate-y-1"
                    >
                        {loading? 'Sending...': 'Send'}
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")