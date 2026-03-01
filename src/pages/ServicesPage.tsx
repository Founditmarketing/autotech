import React from 'react';
import { Truck, ShieldCheck, Wrench, ArrowRight, Target, CarFront, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
    return (
        <div className="pt-24 bg-zinc-50 min-h-screen">
            {/* Header */}
            <div className="bg-zinc-950 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 rounded-sm border border-red-600/20">
                        <Wrench className="w-4 h-4" />
                        Complete Auto Care
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">Our Services</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        From emergency recovery to precision collision repair. If it has wheels and an engine, Auto Tech has the expertise to get it back on the road.
                    </p>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
                {/* Mechanical */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Mechanical Repair</h2>
                        <p className="text-lg text-zinc-600 mb-6">
                            Modern vehicles are complex, requiring state-of-the-art diagnostics and deep mechanical expertise. Our certified technicians handle everything from routine maintenance to complete engine rebuilds.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                'Full Computer Diagnostics',
                                'Engine & Transmission Repair',
                                'Brake Systems & Rotors',
                                'A/C & Heating Systems',
                                'Suspension & Steering',
                                'Routine Fleet Maintenance'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                                    <span className="font-semibold text-zinc-900">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-zinc-950 hover:bg-zinc-800 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide flex items-center justify-center gap-3 transition-all">
                            Schedule Repair
                        </button>
                    </div>
                    <div className="order-1 lg:order-2 h-[400px] bg-zinc-200 rounded-2xl overflow-hidden relative shadow-lg">
                        <img src="/images/mechanical.png" alt="Mechanical Repair" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Collision */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="h-[400px] bg-zinc-200 rounded-2xl overflow-hidden relative shadow-lg">
                        <img src="/images/collision.png" alt="Collision Center" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Collision Center</h2>
                        <p className="text-lg text-zinc-600 mb-6">
                            Accidents are stressful enough without worrying about the quality of the repair. We work directly with all major insurance companies to restore your vehicle to pre-accident condition, matching factory specifications perfectly.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                'Major Frame Straightening',
                                'Computerized Color Matching',
                                'Dent & Scratch Removal',
                                'Auto Glass Replacement',
                                'Direct Insurance Billing',
                                'Lifetime Paint Warranty'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                                    <span className="font-semibold text-zinc-900">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-zinc-950 hover:bg-zinc-800 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide flex items-center justify-center gap-3 transition-all">
                            Request an Estimate
                        </button>
                    </div>
                </div>

                {/* Towing */}
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-red-600 text-white rounded-3xl overflow-hidden shadow-2xl">
                    <div className="order-2 lg:order-1 p-12 lg:p-16">
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-6">24/7 Emergency Towing</h2>
                        <p className="text-lg text-red-100 mb-6">
                            When you're stranded, every minute counts. Auto Tech operates the largest, most reliable towing fleet in Central Louisiana. We dispatch immediately, 24 hours a day, 365 days a year.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                'Light & Heavy Duty Towing',
                                'Accident Recovery',
                                'Winch Outs & Off-Road Recovery',
                                'Lockouts & Jump Starts',
                                'Equipment Transport',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                    <span className="font-semibold text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-white hover:bg-zinc-100 text-red-600 px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide flex items-center justify-center gap-3 transition-all w-full md:w-auto shadow-lg shadow-red-900/20">
                            <PhoneCall className="w-6 h-6" />
                            Call Dispatch (318) 555-0198
                        </button>
                    </div>
                    <div className="order-1 lg:order-2 h-full min-h-[400px] relative">
                        <img src="/images/towing.png" alt="24/7 Towing" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent lg:block hidden" />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent lg:hidden block" />
                    </div>
                </div>

            </div>
        </div>
    );
}
