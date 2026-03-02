import React from 'react';
import { Wrench, ArrowRight, CheckCircle2, Activity, Settings2, ThermometerSnowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export function MechanicalPage() {
    return (
        <div className="pt-24 bg-zinc-50 min-h-screen">
            {/* Header */}
            <div className="bg-zinc-950 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="/images/mechanical.png" alt="Mechanical Repair" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Reveal delay={0.2}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 rounded-sm border border-red-600/20">
                            <Wrench className="w-4 h-4" />
                            Full-Service Mechanical
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-[1.1]">
                            Diagnosed Right. <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Fixed Once.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium mb-10">
                            Modern vehicles require state-of-the-art diagnostics and deep mechanical expertise. Our certified technicians handle everything from oil changes to complete engine rebuilds.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Core Capabilities */}
            <div className="max-w-7xl mx-auto px-6 py-24 border-y border-zinc-200">
                <Reveal>
                    <h2 className="text-4xl font-black uppercase tracking-tight mb-16 text-center text-zinc-950">Expert Systems Repair</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-red-600/20 group-hover:-translate-y-2 transition-transform">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Computer Diagnostics</h3>
                            <p className="text-zinc-600 mb-6">We don't guess. We utilize factory-level scan tools to communicate directly with your vehicle's computers to pinpoint the exact failure.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-red-500" /> Check Engine Lights</li>
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-red-500" /> ABS & Airbag Systems</li>
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-red-500" /> Electrical Troubleshooting</li>
                            </ul>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-zinc-950 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-zinc-900/20 group-hover:-translate-y-2 transition-transform">
                                <Settings2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Engine & Drivetrain</h3>
                            <p className="text-zinc-600 mb-6">From replacing timing chains to full transmission swaps, our heavy-line mechanics have the tools and experience to overhaul major components.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Engine Replacement</li>
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Transmission Repair</li>
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Differentials & Axles</li>
                            </ul>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-zinc-100 text-zinc-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-2 transition-transform">
                                <ThermometerSnowflake className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">A/C & Cooling</h3>
                            <p className="text-zinc-600 mb-6">Louisiana summers are unforgiving. We vacuum test, recharge, and rebuild automotive heating and air conditioning systems.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Evacuations & Recharge</li>
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Compressor Replacement</li>
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-900"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Radiator & Water Pumps</li>
                            </ul>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* General Maintenance Strip */}
            <div className="bg-red-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Fleet & Routine Maintenance</h3>
                        <p className="text-red-100 text-lg">We offer comprehensive 30/60/90K mile services, brake jobs, flush services, and commercial fleet management.</p>
                    </div>
                    <Link to="/contact" className="bg-white text-red-600 hover:bg-zinc-100 px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wide transition-all shadow-md shadow-red-900/20 whitespace-nowrap">
                        Book Maintenance
                    </Link>
                </div>
            </div>
        </div>
    );
}
