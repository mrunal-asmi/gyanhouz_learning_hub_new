'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Campus {
  id: number;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  alt: string;
  lat: number;
  lng: number;
  facilities: string[];
  programs: string[];
  timing: string;
  admissionStatus: 'Open' | 'Limited' | 'Waitlist';
}

const mockCampuses: Campus[] = [
{
  id: 1,
  name: 'GYANHOUZ Bangalore - Whitefield',
  city: 'Bangalore',
  state: 'Karnataka',
  address: 'Plot No. 45, EPIP Zone, Whitefield, Bangalore - 560066',
  phone: '+91 80 4567 8901',
  email: 'whitefield@gyanhouz.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_145f7a36b-1765477774898.png",
  alt: 'Modern educational building with glass facade and colorful learning spaces visible from outside',
  lat: 12.9698,
  lng: 77.7499,
  facilities: ['Robotics Lab', 'Science Innovation Center', 'Career Discovery Zone', 'Indoor Play Area'],
  programs: ['Preschool', 'School of Creativity', 'Innovation Labs', 'Industry Club'],
  timing: 'Mon-Sat: 8:30 AM - 6:00 PM',
  admissionStatus: 'Limited'
},
{
  id: 2,
  name: 'GYANHOUZ Mumbai - Powai',
  city: 'Mumbai',
  state: 'Maharashtra',
  address: 'Tower A, Hiranandani Gardens, Powai, Mumbai - 400076',
  phone: '+91 22 6789 0123',
  email: 'powai@gyanhouz.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f069b08f-1765366095354.png",
  alt: 'Contemporary school building with open courtyard and children engaged in outdoor learning activities',
  lat: 19.1197,
  lng: 72.9059,
  facilities: ['Electronics Workshop', 'Maker Space', 'STEM Lab', 'Outdoor Learning Garden'],
  programs: ['Preschool', 'Innovation Labs', 'Career Discovery'],
  timing: 'Mon-Sat: 9:00 AM - 6:30 PM',
  admissionStatus: 'Open'
},
{
  id: 3,
  name: 'GYANHOUZ Delhi - Gurgaon',
  city: 'Gurgaon',
  state: 'Haryana',
  address: 'Sector 56, Golf Course Road, Gurgaon - 122011',
  phone: '+91 124 456 7890',
  email: 'gurgaon@gyanhouz.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe71d0ec-1765607787890.png",
  alt: 'Spacious learning center with bright classrooms and children working on hands-on science projects',
  lat: 28.4211,
  lng: 77.0840,
  facilities: ['AI & Coding Lab', 'Design Thinking Studio', 'Innovation Theater', 'Sports Complex'],
  programs: ['Preschool', 'School of Creativity', 'Innovation Labs'],
  timing: 'Mon-Sat: 8:00 AM - 6:00 PM',
  admissionStatus: 'Waitlist'
},
{
  id: 4,
  name: 'GYANHOUZ Hyderabad - Hitech City',
  city: 'Hyderabad',
  state: 'Telangana',
  address: 'Cyber Towers, Hitech City, Hyderabad - 500081',
  phone: '+91 40 2345 6789',
  email: 'hitechcity@gyanhouz.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7d51f00-1766139752822.png",
  alt: 'Modern educational facility with technology-enabled classrooms and collaborative learning spaces',
  lat: 17.4435,
  lng: 78.3772,
  facilities: ['Robotics Arena', 'Science Lab', 'Art Studio', 'Library & Resource Center'],
  programs: ['Preschool', 'Innovation Labs', 'Industry Club'],
  timing: 'Mon-Sat: 8:30 AM - 6:30 PM',
  admissionStatus: 'Open'
},
{
  id: 5,
  name: 'GYANHOUZ Pune - Baner',
  city: 'Pune',
  state: 'Maharashtra',
  address: 'Aundh-Baner Link Road, Baner, Pune - 411045',
  phone: '+91 20 6789 1234',
  email: 'baner@gyanhouz.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ccb67141-1764910375532.png",
  alt: 'Vibrant learning environment with colorful interiors and children engaged in creative activities',
  lat: 18.5596,
  lng: 73.7802,
  facilities: ['Maker Lab', 'STEM Center', 'Outdoor Play Zone', 'Parent Lounge'],
  programs: ['Preschool', 'School of Creativity'],
  timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
  admissionStatus: 'Limited'
},
{
  id: 6,
  name: 'GYANHOUZ Chennai - OMR',
  city: 'Chennai',
  state: 'Tamil Nadu',
  address: 'Rajiv Gandhi Salai (OMR), Thoraipakkam, Chennai - 600097',
  phone: '+91 44 4567 8901',
  email: 'omr@gyanhouz.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe71d0ec-1765607787890.png",
  alt: 'State-of-the-art learning center with innovative lab spaces and children conducting experiments',
  lat: 12.9396,
  lng: 80.2304,
  facilities: ['Innovation Lab', 'Career Discovery Center', 'Digital Library', 'Activity Hall'],
  programs: ['Preschool', 'Innovation Labs', 'Industry Club'],
  timing: 'Mon-Sat: 8:30 AM - 6:30 PM',
  admissionStatus: 'Open'
}];


const cities = ['All Cities', 'Bangalore', 'Mumbai', 'Gurgaon', 'Hyderabad', 'Pune', 'Chennai'];

export default function CampusLocator() {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedCampus, setSelectedCampus] = useState<Campus | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCampuses = mockCampuses.filter((campus) => {
    const matchesCity = selectedCity === 'All Cities' || campus.city === selectedCity;
    const matchesSearch = campus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campus.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campus.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':return 'bg-success text-success-foreground';
      case 'Limited':return 'bg-warning text-warning-foreground';
      case 'Waitlist':return 'bg-error text-error-foreground';
      default:return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 px-4 py-2 rounded-full mb-4">
            <Icon name="MapIcon" size={20} className="text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">Campus Locator</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Find Your Nearest GYANHOUZ Campus
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit any of our 12+ campuses across India to experience the future of education firsthand
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Icon name="MagnifyingGlassIcon" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by campus name, city, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />

          </div>

          <div className="flex flex-wrap gap-2">
            {cities.map((city) =>
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-6 py-2 rounded-lg font-medium transition-smooth ${
              selectedCity === city ?
              'bg-primary text-primary-foreground shadow-brand' :
              'bg-card text-foreground border border-border hover:border-primary'}`
              }>

                {city}
              </button>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4">
            {filteredCampuses.map((campus) =>
            <div
              key={campus.id}
              onClick={() => setSelectedCampus(campus)}
              className={`bg-card border rounded-xl overflow-hidden cursor-pointer transition-smooth hover:shadow-lg ${
              selectedCampus?.id === campus.id ? 'border-primary shadow-brand' : 'border-border'}`
              }>

                <div className="relative h-48">
                  <AppImage
                  src={campus.image}
                  alt={campus.alt}
                  className="w-full h-full object-cover" />

                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(campus.admissionStatus)}`}>
                    {campus.admissionStatus === 'Open' ? '✓ Admissions Open' :
                  campus.admissionStatus === 'Limited' ? '⚠ Limited Seats' : '⏳ Waitlist Only'}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{campus.name}</h3>
                    <div className="flex items-start space-x-2 text-muted-foreground">
                      <Icon name="MapPinIcon" size={16} className="mt-1 flex-shrink-0" />
                      <p className="text-sm">{campus.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="PhoneIcon" size={16} className="text-primary" />
                      <span className="text-sm text-foreground">{campus.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="ClockIcon" size={16} className="text-primary" />
                      <span className="text-sm text-foreground">Mon-Sat</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {campus.programs.slice(0, 3).map((program, idx) =>
                  <span key={idx} className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                        {program}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            {selectedCampus ?
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
                <div className="h-96 bg-muted">
                  <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={selectedCampus.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${selectedCampus.lat},${selectedCampus.lng}&z=15&output=embed`}
                  className="border-0" />

                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedCampus.name}</h3>
                    <p className="text-muted-foreground">{selectedCampus.address}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="PhoneIcon" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="font-semibold text-foreground">{selectedCampus.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Icon name="EnvelopeIcon" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-semibold text-foreground">{selectedCampus.email}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Icon name="ClockIcon" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Timing</div>
                        <div className="font-semibold text-foreground">{selectedCampus.timing}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-bold text-foreground mb-3">Available Facilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedCampus.facilities.map((facility, idx) =>
                    <div key={idx} className="flex items-center space-x-2">
                          <Icon name="CheckCircleIcon" size={16} className="text-success" />
                          <span className="text-sm text-foreground">{facility}</span>
                        </div>
                    )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-bold text-foreground mb-3">Programs Offered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCampus.programs.map((program, idx) =>
                    <span key={idx} className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg">
                          {program}
                        </span>
                    )}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-brand hover:shadow-xl hover:-translate-y-0.5 transition-smooth">
                      Book Campus Tour
                    </button>
                    <button className="px-6 py-3 bg-card border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-smooth">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div> :

            <div className="bg-card border border-border rounded-xl p-12 text-center">
                <Icon name="MapIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Select a Campus</h3>
                <p className="text-muted-foreground">
                  Click on any campus from the list to view details and location on the map
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

}