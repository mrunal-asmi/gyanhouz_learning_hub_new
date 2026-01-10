import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
  campus: string;
}

const testimonials: Testimonial[] = [
{
  id: 1,
  name: 'Priya Sharma',
  role: 'Parent',
  location: 'Bangalore',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14172f3b5-1763301352044.png",
  alt: 'Professional Indian woman with long black hair wearing blue blazer smiling warmly',
  rating: 5,
  text: 'The campus tour was incredible! Seeing my daughter interact with the robotics lab and innovation spaces made our decision easy. The staff was welcoming and answered all our questions patiently.',
  campus: 'Whitefield Campus'
},
{
  id: 2,
  name: 'Rajesh Kumar',
  role: 'Parent',
  location: 'Mumbai',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19d0e6f0d-1763295389190.png",
  alt: 'Young Indian professional man with short black hair in navy suit smiling confidently',
  rating: 5,
  text: 'GYANHOUZ team was extremely responsive. They scheduled our campus visit within 24 hours and the experience exceeded our expectations. My son is now thriving in their innovation labs.',
  campus: 'Powai Campus'
},
{
  id: 3,
  name: 'Anita Desai',
  role: 'Parent',
  location: 'Gurgaon',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_103114392-1763294966758.png",
  alt: 'Elegant Indian woman with shoulder-length hair wearing professional attire with gentle smile',
  rating: 5,
  text: 'The virtual tour option was perfect for our busy schedule. We could explore the campus facilities from home and still got a comprehensive understanding of their unique learning approach.',
  campus: 'Gurgaon Campus'
}];


export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="StarIcon" size={20} className="text-success" />
            <span className="text-sm font-semibold text-success">Parent Experiences</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Parents Say About Their Campus Visits
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from families who visited our campuses and chose GYANHOUZ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) =>
          <div
            key={testimonial.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-smooth">

              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover" />

                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Icon key={i} name="StarIcon" size={16} className="text-warning" variant="solid" />
              )}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="MapPinIcon" size={16} className="text-primary" />
                  <span>{testimonial.campus}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-card border border-border rounded-xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">5000+</div>
              <div className="text-sm text-muted-foreground">Campus Visits</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}