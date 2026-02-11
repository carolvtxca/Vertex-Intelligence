"use client";

import { Send, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
    dict: {
        name: string;
        email: string;
        message: string;
        submit: string;
    };
    lang: string;
}

export default function ContactForm({ dict, lang }: ContactFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing.");
            }

            const templateParams = {
                to_name: "Vertex Intelligence",
                from_name: name,
                from_email: email,
                name: name, // Fallback if template uses {{name}}
                email: email, // Fallback if template uses {{email}}
                message: message,
                reply_to: email,
            };



            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setSubmitted(true);
        } catch (err: any) {
            console.error("Failed to send email:", err);
            // Enhanced error logging
            if (err.text) {
                setError(`Failed to send message: ${err.text}`);
            } else if (err.message) {
                setError(`Failed to send message: ${err.message}`);
            } else {
                setError("Failed to send message. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-green-600 dark:text-green-400">
                    <Send size={40} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {lang === 'en' ? "Message Sent!" : "消息已发送！"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                        {lang === 'en'
                            ? "Thank you! Your default email client should have opened with your message draft."
                            : "谢谢！您的默认邮件客户端应该已经打开并显示了您的消息草稿。"}
                    </p>
                </div>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                    {lang === 'en' ? "Send another message" : "发送另一条消息"}
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                    {dict.name}
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-slate-400"
                    placeholder={lang === "en" ? "Your Name" : "您的姓名"}
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                    {dict.email}
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-slate-400"
                    placeholder={lang === "en" ? "name@company.com" : "您的邮箱"}
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                    {dict.message}
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-slate-400"
                    placeholder={lang === "en" ? "How can we help you?" : "请在此输入您的需求..."}
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        {dict.submit}
                        <Send size={18} />
                    </>
                )}
            </button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
    );
}
