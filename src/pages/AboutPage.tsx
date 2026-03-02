import React from 'react';
import { Target, ShieldCheck, MapPin, Clock, Users } from 'lucide-react';

export function AboutPage() {
    return (
        <div className="bg-zinc-50 min-h-screen">
            {/* Hero */}
            <div className="relative bg-zinc-950 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img src="/images/legacy.png" alt="Auto Tech Legacy" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-zinc-950/80" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Our Legacy</h1>
                    <p className="text-xl text-zinc-300 max-w-3xl mx-auto font-medium leading-relaxed">
                        Founded in 1984, Auto Tech is a third-generation, family-owned institution. For 40 years, we've built our reputation on doing the job right the very first time. No shortcuts. Just honest, reliable service for Central Louisiana.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-red-600/20">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4">Unshakeable Trust</h3>
                            <p className="text-zinc-600">We treat every vehicle as if our own family was riding in it. Integrity isn't a buzzword here; it's the foundation of everything we do.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-zinc-900/20">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4">Family Owned</h3>
                            <p className="text-zinc-600">Three generations of automotive experts. When you talk to us, you are talking to the owners. We are deeply invested in our community.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-zinc-950 border border-zinc-200">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4">Master Craftsmanship</h3>
                            <p className="text-zinc-600">From our ASE-certified mechanics to our master painters, we employ the best talent and use state-of-the-art equipment to guarantee perfection.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facility */}
            <div className="py-24 bg-zinc-950 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black uppercase tracking-tight mb-6">A State of the Art Facility</h2>
                            <p className="text-lg text-zinc-400 mb-6">
                                Our massive complex on Highway 28 East is fully equipped to handle high-volume repairs without sacrificing quality. We maintain clean, organized bays, dedicated collision restoration zones, and a vast inventory of parts.
                            </p>
                            <div className="space-y-4 mt-8">
                                <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                                    <MapPin className="text-red-500 w-6 h-6" />
                                    <span className="font-semibold text-zinc-200">Conveniently located at 4624 Hwy 28 East</span>
                                </div>
                                <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                                    <Clock className="text-red-500 w-6 h-6" />
                                    <span className="font-semibold text-zinc-200">Fast turnaround times & efficient scheduling</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/images/mechanical.png" className="rounded-xl w-full h-48 object-cover" alt="Shop Interior" />
                            <img src="/images/collision.png" className="rounded-xl w-full h-48 object-cover mt-8" alt="Collision Center" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
