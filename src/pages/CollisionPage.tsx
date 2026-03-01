import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Factory, Hammer, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CollisionPage() {
    return (
        <div className="pt-24 bg-zinc-50 min-h-screen">
            {/* Header */}
            <div className="bg-zinc-950 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="/images/collision.png" alt="Collision Repair" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 rounded-sm border border-red-600/20">
                        <ShieldCheck className="w-4 h-4" />
                        Certified Collision Center
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-[1.1]">
                        Restored to <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-white">Factory Specs.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium mb-10">
                        Accidents are stressful enough without worrying about the quality of your repair. We work directly with all major insurance companies to restore your vehicle perfectly.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide transition-all shadow-lg shadow-red-600/20 w-full md:w-auto">
                        <ArrowRight className="w-6 h-6" />
                        Request Free Estimate
                    </Link>
                </div>
            </div>

            {/* Core Capabilities */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
                            <Hammer className="w-7 h-7 text-zinc-900" />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Frame Straightening</h3>
                        <p className="text-zinc-600">Using state-of-the-art laser measuring systems, we return heavily damaged frames back to exact factory millimeter tolerances.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                            <Factory className="w-7 h-7 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Flawless Paint Match</h3>
                        <p className="text-zinc-600">Our computerized color mixing systems and temperature-controlled down-draft spray booths ensure perfectly blended, invisible repairs.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
                            <ShieldCheck className="w-7 h-7 text-zinc-900" />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Direct Insurance</h3>
                        <p className="text-zinc-600">We handle the adjusters, supplement requests, and billing paperwork directly so you don't have to fight the insurance company alone.</p>
                    </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-zinc-950 text-white rounded-3xl overflow-hidden shadow-2xl">
                    <div className="order-2 lg:order-1 p-10 lg:p-16">
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Comprehensive Body Repair Facility</h2>
                        <ul className="space-y-6">
                            {[
                                { title: 'Dent & Scratch Removal', desc: 'From minor dings to deep gouges, restored seamlessly.' },
                                { title: 'Auto Glass Replacement', desc: 'Windshields, side windows, and rear glass replaced on-site.' },
                                { title: 'Suspension & Alignment', desc: 'Post-collision suspension repair to ensure safe tracking.' },
                                { title: 'Lifetime Paint Warranty', desc: 'We stand behind our clear coats for as long as you own it.' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-zinc-400 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2 h-[300px] lg:h-full relative overflow-hidden">
                        <img src="/images/collision.png" alt="Collision Tech" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
