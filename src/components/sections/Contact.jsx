import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailJSApiKey = import.meta.env.VITE_EMAILJS_API_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceID, templateID, e.target, emailJSApiKey).then((result) => {
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        }).catch((error) => alert("Failed to send message, please try again."));
    }
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
        <RevealOnScroll>
            <div className="w-full max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                        type = "text" 
                        id="name" 
                        name="from_name" 
                        required 
                        value={formData.name}
                        className="w-full bg-white/5 border border-white/10 rounded px-3 md:px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-fuchsia-500/5 text-sm md:text-base"
                        placeholder="Your Name"
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    />
                    </div>
                    <div className="relative">
                        <input
                        type = "email" 
                        id="email" 
                        name="reply_to" 
                        required
                        value={formData.email}
                        className="w-full bg-white/5 border border-white/10 rounded px-3 md:px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-fuchsia-500/5 text-sm md:text-base"
                        placeholder="john.doe@gmail.com"
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    />
                    </div>
                    <div className="relative">
                        <textarea 
                        id="message" 
                        name="message" 
                        required
                        value={formData.message}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded px-3 md:px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-fuchsia-500/5 text-sm md:text-base resize-none"
                        placeholder="Message"
                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    />
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 text-white py-2 md:py-3 px-4 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-sm md:text-base">
                        Send Message
                    </button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
}