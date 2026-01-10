'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from '@/components/ui/AppImage';

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-brand-blue via-primary to-secondary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-teal rounded-full blur-3xl animation-pulse-slow" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="BoltIcon" size={20} className="text-brand-orange" />
              <span className="text-sm font-semibold">Industry-Grade Technology Lab</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              From Circuit Boards to
              <span className="block text-brand-orange">Robot Champions</span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed">
              While others teach theory, we build creators. India's most advanced electronics & robotics lab where children program real robots, design IoT devices, and compete nationally.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div>
                <div className="text-3xl font-bold text-brand-orange">500+</div>
                <div className="text-sm text-white/80">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-teal">50+</div>
                <div className="text-sm text-white/80">Competition Wins</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green">100%</div>
                <div className="text-sm text-white/80">Hands-On Learning</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-campus-locator"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg hover:-translate-y-1 transition-smooth">

                <Icon name="RocketLaunchIcon" size={20} className="mr-2" />
                Enroll in Robotics Lab
              </Link>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-smooth">

                <Icon name="PlayIcon" size={20} className="mr-2" />
                Watch Lab Tour
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4]?.map((i) =>
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-red border-2 border-white" />
                )}
              </div>
              <div className="text-sm text-white/90">
                <span className="font-semibold">1,200+ students</span> building the future
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1f966c70b-1767715904004.png"
                alt="Children building and programming robots in advanced electronics lab with Arduino boards and robotic arms"
                width={800}
                height={600}
                className="w-full h-auto" />

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-brand-blue">Arduino • Raspberry Pi • IoT</div>
                    <div className="text-sm text-muted-foreground">Professional-grade equipment</div>
                  </div>
                  <Icon name="CpuChipIcon" size={40} className="text-brand-orange" />
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-float">
              <Icon name="TrophyIcon" size={32} className="text-brand-orange mb-2" />
              <div className="text-sm font-semibold text-foreground">National Champions</div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {isVideoPlaying &&
      <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setIsVideoPlaying(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <button
            onClick={() => setIsVideoPlaying(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth">

              <Icon name="XMarkIcon" size={24} className="text-white" />
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Icon name="PlayCircleIcon" size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Lab Tour Video</p>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

}