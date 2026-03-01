import React from 'react';
import { PhoneCall, Truck, MapPin, Search, ShieldCheck, AlertTriangle } from 'lucide-react';

export function TowingPage() {
    return (
        <div className="pt-24 bg-zinc-50 min-h-screen">
            {/* Emergency Hero */}
            <div className="bg-red-600 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 mix-blend-multiply">
                    <img src="/images/towing.png" alt="Auto Tech Towing Fleet" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-red-600 text-sm font-black uppercase tracking-widest mb-8 rounded-sm shadow-lg shadow-black/10">
                        <AlertTriangle className="w-4 h-4" />
                        24/7 Dispatch Active
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 leading-[1.1]">
                        Stranded? <br className="md:hidden" />
                        <span className="text-red-200">We're on our way.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto font-medium mb-12">
                        Central Louisiana's largest and most reliable towing fleet. When every minute counts, you can't afford to wait on a middleman.
                    </p>
                    <a href="tel:3185550198" className="inline-flex items-center justify-center gap-4 bg-white hover:bg-zinc-100 text-red-600 px-10 py-6 rounded-xl font-black text-2xl md:text-3xl uppercase tracking-wide transition-all shadow-2xl hover:scale-105 active:scale-95 group w-full md:w-auto">
                        <PhoneCall className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                        Tap to Call Now
                    </a>
                </div>
            </div>

            {/* Trust & Stats */}
            <div className="bg-zinc-950 py-12 border-y border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
                        <div className="flex flex-col items-center text-center pt-8 md:pt-0 pb-8 md:pb-0">
                            <div className="text-4xl font-black text-white mb-2">20 Mins</div>
                            <div className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Average Response Time</div>
                        </div>
                        <div className="flex flex-col items-center text-center pt-8 md:pt-0 pb-8 md:pb-0">
                            <div className="text-4xl font-black text-white mb-2">Largest</div>
                            <div className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Fleet in Cenla</div>
                        </div>
                        <div className="flex flex-col items-center text-center pt-8 md:pt-0 pb-8 md:pb-0">
                            <div className="text-4xl font-black text-white mb-2">40 Years</div>
                            <div className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Local Experience</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Breakdown */}
            <div className="py-24 max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-black uppercase tracking-tight mb-16 text-center text-zinc-950">Comprehensive Recovery</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-zinc-200 rounded-3xl p-10 hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-600/20 group-hover:-translate-y-2 transition-transform">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">Light & Heavy Duty Towing</h3>
                        <p className="text-lg text-zinc-600 mb-6">From family sedans to commercial heavy rigs, our fleet is equipped with the exact wrecker or flatbed required to move your vehicle safely without secondary damage.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-zinc-900 font-semibold"><ShieldCheck className="w-5 h-5 text-red-600" /> Flatbed Transport</li>
                            <li className="flex items-center gap-3 text-zinc-900 font-semibold"><ShieldCheck className="w-5 h-5 text-red-600" /> Wheel-Lift Towing</li>
                            <li className="flex items-center gap-3 text-zinc-900 font-semibold"><ShieldCheck className="w-5 h-5 text-red-600" /> Medium/Heavy Duty Wreckers</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-zinc-200 rounded-3xl p-10 hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-zinc-950 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-zinc-900/20 group-hover:-translate-y-2 transition-transform">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">Accident & Off-Road Recovery</h3>
                        <p className="text-lg text-zinc-600 mb-6">Whether you've been in a major collision or slid off into a ditch on a rural road, our recovery specialists have the rigging expertise to extract your vehicle.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-zinc-900 font-semibold"><ShieldCheck className="w-5 h-5 text-zinc-950" /> Direct-to-Shop Collision Towing</li>
                            <li className="flex items-center gap-3 text-zinc-900 font-semibold"><ShieldCheck className="w-5 h-5 text-zinc-950" /> Deep Mud & Water Winch Outs</li>
                            <li className="flex items-center gap-3 text-zinc-900 font-semibold"><ShieldCheck className="w-5 h-5 text-zinc-950" /> Rollover Recovery</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Service Area */}
            <div className="bg-zinc-100 py-24 border-y border-zinc-200">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden border border-zinc-300 shadow-md">
                        {/* Visual Map Representation */}
                        <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[url('https://maps.google.com/maps?q=Alexandria%20LA&t=&z=10&ie=UTF8&iwloc=&output=embed')] bg-cover bg-center grayscale opacity-50 mix-blend-multiply pointer-events-none"></div>
                            <div className="w-64 h-64 bg-red-600/10 border-2 border-red-600 rounded-full flex items-center justify-center relative shadow-xl shadow-red-600/10">
                                <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
                                <div className="w-4 h-4 bg-red-600 rounded-full relative z-10 border-2 border-white shadow-sm"></div>
                                <div className="absolute -bottom-8 bg-zinc-950 text-white px-3 py-1 text-xs font-bold uppercase rounded-md whitespace-nowrap">Auto Tech HQ</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Service Area & Radius</h2>
                        <p className="text-lg text-zinc-600 mb-8">
                            Operating out of our primary facility in Pineville, we dispatch rapidly across Central Louisiana. If you are stuck within a 50-mile radius, we are likely your fastest option.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                'Pineville', 'Alexandria', 'Tioga', 'Ball',
                                'Woodworth', 'Boyce', 'Deville', 'Lecompte'
                            ].map((city, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-zinc-800 font-semibold bg-white p-3 rounded-lg border border-zinc-200 shadow-sm">
                                    <MapPin className="w-4 h-4 text-red-600" />
                                    {city}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-100 flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                            <p className="text-sm font-semibold text-red-900">
                                <strong className="uppercase block mb-1">Out of Primary Zone?</strong>
                                We handle long-distance transport and specialty hauls state-wide upon request. Call for a rapid quote.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
