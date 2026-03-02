import React from 'react';
import { AlertTriangle, ArrowRight, Home, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <div className="pt-24 bg-zinc-950 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden text-center px-6">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src="/images/towing.png" alt="Broken Down Vehicle" className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <div className="w-24 h-24 bg-red-600/10 text-red-500 rounded-3xl flex items-center justify-center mb-8 border border-red-600/20 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
                    <AlertTriangle className="w-12 h-12" />
                </div>

                <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white mb-4">
                    404
                </h1>

                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                    Dead <span className="text-red-600">End.</span>
                </h2>

                <p className="text-xl text-zinc-400 font-medium mb-12 max-w-lg">
                    Looks like this page broke down on the side of the road. Let's get you towed back to safety.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link to="/" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 text-zinc-950 px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide transition-all shadow-md">
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <a href="tel:3185550198" className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide transition-all shadow-lg shadow-red-600/20">
                        <PhoneCall className="w-5 h-5" />
                        Call Dispatch
                    </a>
                </div>
            </div>
        </div>
    );
}
