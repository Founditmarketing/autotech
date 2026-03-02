import React from 'react';
import { Truck, Building2, Clock, ShieldCheck, ArrowRight, Wrench, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export function FleetPage() {
    return (
        <div className="pt-24 bg-zinc-50 min-h-screen">
            {/* Header */}
            <div className="bg-zinc-950 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="/images/mechanical.png" alt="Fleet Services" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Reveal delay={0.2}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 rounded-sm border border-red-600/20">
                            <Building2 className="w-4 h-4" />
                            Commercial Accounts
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-[1.1]">
                            Keep Your Business <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Moving.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium mb-10">
                            Downtime costs you money. Our dedicated commercial fleet division provides priority service, comprehensive DOT inspections, and heavy-duty towing to guarantee your operation never stops.
                        </p>
                        <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide transition-all shadow-lg shadow-red-600/20 w-full md:w-auto">
                            <ArrowRight className="w-6 h-6" />
                            Open a Fleet Account
                        </Link>
                    </Reveal>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-7xl mx-auto px-6 py-24 border-y border-zinc-200">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black uppercase tracking-tight text-zinc-950 mb-4">The Auto Tech Advantage</h2>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">We treat your vehicles like our own. Enjoy streamlined billing and rapid turnaround times exclusively for commercial partners.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-red-600/20 group-hover:-translate-y-2 transition-transform">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Priority Bay Access</h3>
                            <p className="text-zinc-600">Fleet vehicles skip the line. When your primary revenue generators break down, they get immediate bay access to minimize operational downtime.</p>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-zinc-950 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-zinc-900/20 group-hover:-translate-y-2 transition-transform">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Net-30 Billing</h3>
                            <p className="text-zinc-600">Simplify your accounting. Approved commercial accounts receive transparent, zero-hassle Net-30 invoicing with detailed digital maintenance logs.</p>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-zinc-100 text-zinc-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-2 transition-transform">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">DOT Inspections</h3>
                            <p className="text-zinc-600">Stay compliant. We provide state and federal DOT inspections, heavy-line preventative maintenance, and strict adherence to commercial regulations.</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Heavy Towing CTA */}
            <div className="bg-zinc-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img src="/images/towing.png" alt="Heavy Towing" className="w-full h-full object-cover grayscale mix-blend-multiply" />
                </div>
                <Reveal>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Heavy-Duty Towing <br /><span className="text-red-500">On Standby.</span></h3>
                            <p className="text-xl text-zinc-400 font-medium mb-8">
                                Our fleet of rotator wreckers and heavy-duty tow trucks are available 24/7 for our commercial partners. From box trucks to 18-wheelers, we recover and transport it safely.
                            </p>
                            <a href="tel:3185550198" className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide transition-all shadow-lg shadow-red-600/20">
                                <Truck className="w-6 h-6" />
                                Call Heavy Dispatch
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-64 h-64 border-4 border-red-600/20 rounded-full flex items-center justify-center relative shadow-[0_0_100px_rgba(220,38,38,0.15)]">
                                <div className="w-48 h-48 border border-red-500/40 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <div className="w-32 h-32 bg-red-600/10 rounded-full blur-md absolute"></div>
                                </div>
                                <Wrench className="w-16 h-16 text-red-500 absolute" />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
