import React from 'react';
import { MapPin, PhoneCall, Clock, Mail, MessageSquare } from 'lucide-react';

export function ContactPage() {
    return (
        <div className="bg-zinc-50 min-h-screen">
            {/* Header */}
            <div className="bg-zinc-950 text-white py-20 relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 rounded-sm border border-red-600/20">
                        <MessageSquare className="w-4 h-4" />
                        Get in touch
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">Contact Us</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Need an estimate? Have a question about a repair? We are here to help. Reach out directly or drop by the shop.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-zinc-950">Shop Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-red-600/10 p-4 rounded-xl border border-red-600/20 shrink-0">
                                    <MapPin className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-zinc-900 mb-1">Our Location</h4>
                                    <p className="text-zinc-600 text-lg">4624 Highway 28 East<br />Pineville, LA 71360</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-red-600/10 p-4 rounded-xl border border-red-600/20 shrink-0">
                                    <PhoneCall className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-zinc-900 mb-1">Phone Numbers</h4>
                                    <p className="text-zinc-600 text-lg mb-2"><strong className="text-zinc-900">Main Office:</strong> (318) 555-0100</p>
                                    <p className="text-red-600 font-bold text-lg"><strong className="text-red-600 uppercase">24/7 Towing:</strong> (318) 555-0198</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-zinc-200 p-4 rounded-xl border border-zinc-300 shrink-0">
                                    <Clock className="w-8 h-8 text-zinc-700" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-zinc-900 mb-1">Operating Hours</h4>
                                    <p className="text-zinc-600 text-lg"><strong className="text-zinc-900">Mon - Fri:</strong> 8:00 AM - 5:00 PM</p>
                                    <p className="text-zinc-600 text-lg"><strong className="text-zinc-900">Sat - Sun:</strong> Closed (Towing Available 24/7)</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-12 relative h-[300px] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm group">
                            <iframe
                                src="https://maps.google.com/maps?q=Auto%20Tech%204624%20Highway%2028%20East%20Pineville%20LA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-zinc-200/50">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-zinc-950">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-900 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-zinc-900 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-900 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-900 mb-2">Phone Number</label>
                                <input type="tel" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="(555) 555-5555" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-900 mb-2">What do you need help with?</label>
                                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all appearance-none cursor-pointer">
                                    <option>Mechanical Repair</option>
                                    <option>Collision Estimate</option>
                                    <option>Questions about Auto Sales</option>
                                    <option>Other Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-900 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none" placeholder="How can we help you today?"></textarea>
                            </div>

                            <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-wide py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-red-600/20">
                                Submit Lead Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
