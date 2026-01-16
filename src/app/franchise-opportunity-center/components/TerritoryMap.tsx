'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Territory {
  city: string;
  state: string;
  status: 'available' | 'limited' | 'sold';
  population: string;
  demandScore: number;
}

const territories: Territory[] = [
  {
    city: 'Bangalore',
    state: 'Karnataka',
    status: 'limited',
    population: '1.2 Cr',
    demandScore: 95,
  },
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    status: 'limited',
    population: '2.0 Cr',
    demandScore: 98,
  },
  { city: 'Delhi NCR', state: 'Delhi', status: 'limited', population: '3.0 Cr', demandScore: 97 },
  {
    city: 'Hyderabad',
    state: 'Telangana',
    status: 'available',
    population: '1.0 Cr',
    demandScore: 92,
  },
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    status: 'available',
    population: '1.1 Cr',
    demandScore: 90,
  },
  { city: 'Pune', state: 'Maharashtra', status: 'available', population: '75 L', demandScore: 88 },
  { city: 'Ahmedabad', state: 'Gujarat', status: 'available', population: '85 L', demandScore: 86 },
  { city: 'Kolkata', state: 'West Bengal', status: 'sold', population: '1.5 Cr', demandScore: 85 },
  { city: 'Jaipur', state: 'Rajasthan', status: 'available', population: '35 L', demandScore: 82 },
  {
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    status: 'available',
    population: '32 L',
    demandScore: 80,
  },
  { city: 'Chandigarh', state: 'Punjab', status: 'available', population: '12 L', demandScore: 84 },
  {
    city: 'Indore',
    state: 'Madhya Pradesh',
    status: 'available',
    population: '28 L',
    demandScore: 78,
  },
];

export default function TerritoryMap() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'available' | 'limited' | 'sold'>(
    'all'
  );

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-32 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const filteredTerritories =
    selectedStatus === 'all' ? territories : territories.filter((t) => t.status === selectedStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-brand-green text-white';
      case 'limited':
        return 'bg-brand-orange text-white';
      case 'sold':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return 'CheckCircleIcon';
      case 'limited':
        return 'ClockIcon';
      case 'sold':
        return 'XCircleIcon';
      default:
        return 'MapPinIcon';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-4">
            <Icon name="MapIcon" size={20} className="text-brand-blue" />
            <span className="text-sm font-semibold text-brand-blue">Territory Availability</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Secure Your Territory Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Prime locations across India with exclusive geographic rights and high-demand markets.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedStatus('all')}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-smooth ${
              selectedStatus === 'all'
                ? 'bg-brand-orange text-white shadow-brand'
                : 'bg-card text-foreground border border-border hover:border-brand-orange'
            }`}
          >
            All Territories
          </button>
          <button
            onClick={() => setSelectedStatus('available')}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-smooth ${
              selectedStatus === 'available'
                ? 'bg-brand-green text-white shadow-brand'
                : 'bg-card text-foreground border border-border hover:border-brand-green'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedStatus('limited')}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-smooth ${
              selectedStatus === 'limited'
                ? 'bg-brand-orange text-white shadow-brand'
                : 'bg-card text-foreground border border-border hover:border-brand-orange'
            }`}
          >
            Limited Spots
          </button>
          <button
            onClick={() => setSelectedStatus('sold')}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-smooth ${
              selectedStatus === 'sold'
                ? 'bg-muted text-muted-foreground shadow-brand'
                : 'bg-card text-foreground border border-border hover:border-muted'
            }`}
          >
            Sold Out
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerritories.map((territory, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-brand transition-smooth"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{territory.city}</h3>
                  <p className="text-sm text-muted-foreground">{territory.state}</p>
                </div>
                <div
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1 ${getStatusColor(territory.status)}`}
                >
                  <Icon name={getStatusIcon(territory.status) as any} size={14} />
                  <span className="capitalize">{territory.status}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Population</span>
                  <span className="font-semibold text-foreground">{territory.population}</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Market Demand</span>
                    <span className="font-semibold text-brand-orange">
                      {territory.demandScore}/100
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-brand-orange to-brand-red h-full rounded-full transition-smooth"
                      style={{ width: `${territory.demandScore}%` }}
                    ></div>
                  </div>
                </div>

                {territory.status !== 'sold' && (
                  <button className="w-full mt-4 px-4 py-2.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-red hover:shadow-lg transition-smooth">
                    Reserve Territory
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card rounded-xl border border-border p-8 text-center">
          <Icon name="MapPinIcon" size={48} className="text-brand-orange mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Don't See Your City?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're constantly expanding to new territories. Submit your preferred location and we'll
            notify you when it becomes available.
          </p>
          <button className="px-8 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-red hover:shadow-lg transition-smooth">
            Request New Territory
          </button>
        </div>
      </div>
    </section>
  );
}
