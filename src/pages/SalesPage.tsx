import React from 'react';
import { CarFront, Filter, Search, Tag, Milestone } from 'lucide-react';

export function SalesPage() {
    const inventory = [
        { id: 1, make: 'Ford', model: 'F-150 XLT', year: 2018, price: '$28,500', miles: '64,000', tag: 'Great Value' },
        { id: 2, make: 'Chevrolet', model: 'Silverado 1500', year: 2020, price: '$34,900', miles: '42,000', tag: 'Low Miles' },
        { id: 3, make: 'Toyota', model: 'Camry SE', year: 2019, price: '$21,000', miles: '55,000', tag: 'Certified' },
        { id: 4, make: 'Honda', model: 'CR-V EX-L', year: 2021, price: '$29,800', miles: '31,000', tag: '1 Owner' },
        { id: 5, make: 'GMC', model: 'Sierra 2500HD', year: 2017, price: '$42,000', miles: '89,000', tag: 'Heavy Duty' },
        { id: 6, make: 'Jeep', model: 'Wrangler Unlimited', year: 2018, price: '$31,500', miles: '48,000', tag: 'Off-Road Ready' }
    ];

    return (
        <div className="pt-24 bg-zinc-50 min-h-screen">
            {/* Header */}
            <div className="bg-zinc-950 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="/images/sales.png" alt="Auto Sales" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 rounded-sm border border-red-600/20">
                        <CarFront className="w-4 h-4" />
                        Reliable Pre-Owned
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">Auto Sales</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        Fully inspected, reliable pre-owned cars and trucks backed by our 40-year service guarantee. We don't sell lemons, because we have to fix them later.
                    </p>
                </div>
            </div>

            {/* Inventory Filters */}
            <div className="bg-white border-b border-zinc-200 sticky top-16 md:top-auto z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search make, model, or keyword..."
                            className="w-full pl-10 pr-4 py-2 bg-zinc-100 border-none rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-950 text-white rounded-md font-semibold text-sm whitespace-nowrap">
                            <Filter className="w-4 h-4" /> All Vehicles
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-md font-semibold text-sm whitespace-nowrap transition-colors">
                            Trucks
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-md font-semibold text-sm whitespace-nowrap transition-colors">
                            SUVs
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-md font-semibold text-sm whitespace-nowrap transition-colors">
                            Cars
                        </button>
                    </div>
                </div>
            </div>

            {/* Inventory Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {inventory.map((vehicle) => (
                        <div key={vehicle.id} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col relative">
                            <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider shadow-md">
                                {vehicle.tag}
                            </div>
                            <div className="h-64 bg-zinc-200 relative overflow-hidden">
                                <img src="/images/sales.png" alt={`${vehicle.make} ${vehicle.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-black uppercase tracking-tight">{vehicle.year} {vehicle.make}</h3>
                                    <div className="text-xl font-bold text-red-600">{vehicle.price}</div>
                                </div>
                                <h4 className="text-zinc-600 font-medium mb-4">{vehicle.model}</h4>

                                <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-zinc-500 text-sm font-semibold">
                                        <Milestone className="w-4 h-4" />
                                        {vehicle.miles} mi
                                    </div>
                                    <div className="flex items-center gap-1 text-red-600 text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                                        View Details
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
