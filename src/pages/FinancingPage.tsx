import React from 'react';
import { CreditCard, DollarSign, CheckCircle2, ShieldCheck, Tag, Zap, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export function FinancingPage() {
    return (
        <div className="bg-zinc-50 min-h-screen">
            {/* Header */}
            <div className="bg-zinc-950 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="/images/sales.png" alt="Auto Financing" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Reveal delay={0.2}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 rounded-sm border border-red-600/20">
                            <CreditCard className="w-4 h-4" />
                            Flexible Financing
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-[1.1]">
                            Major Repairs. <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Minor Impact.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium mb-10">
                            Don't let an unexpected breakdown ruin your month. Auto Tech offers flexible, low-interest funding options with 0% introductory terms so you can fix your vehicle now and pay over time.
                        </p>
                        <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide transition-all shadow-lg shadow-red-600/20 w-full md:w-auto">
                            <ArrowRight className="w-6 h-6" />
                            Apply for Financing
                        </Link>
                    </Reveal>
                </div>
            </div>

            {/* Why Finance */}
            <div className="max-w-7xl mx-auto px-6 py-24 border-y border-zinc-200">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black uppercase tracking-tight text-zinc-950 mb-4">No-Stress Approvals</h2>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">We partner with Synchrony and Snap Finance to approve all tiers of credit. Bad credit or no credit—we'll keep you driving.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-red-600/20 group-hover:-translate-y-2 transition-transform">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">0% Introductory APR</h3>
                            <p className="text-zinc-600">Qualified applicants receive 6 months of 0% interest on major repairs. Perfect for massive transmission rebuilds or full engine swaps.</p>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-zinc-950 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-zinc-900/20 group-hover:-translate-y-2 transition-transform">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">No Credit Checks</h3>
                            <p className="text-zinc-600">Through our partnership with Snap Finance, we offer lease-to-own funding that doesn't impact your FICO score. Your job is your credit.</p>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-zinc-100 text-zinc-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-2 transition-transform">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Instant Decisions</h3>
                            <p className="text-zinc-600">Apply right from your smartphone while sitting in our lobby. Get approved for up to $5,000 in seconds and approve your ticket instantly.</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Warranty Promise */}
            <div className="bg-red-600 text-white py-24 relative overflow-hidden">
                <Reveal>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-sm font-bold uppercase tracking-wider mb-6 rounded-sm border border-white/20">
                                <Shield className="w-4 h-4" />
                                Ironclad Protection
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">The 40-Year <br />Service Guarantee.</h3>
                            <p className="text-xl text-red-100 font-medium mb-8 max-w-xl">
                                Whether you finance or pay cash, every repair at Auto Tech is backed by an industry-leading nationwide warranty on parts and labor. We didn't survive 40 years by cutting corners.
                            </p>
                            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-red-600 hover:bg-zinc-100 px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide transition-all shadow-xl">
                                <ShieldCheck className="w-6 h-6" />
                                Claim Your Warranty
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
