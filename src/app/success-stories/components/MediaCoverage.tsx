import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MediaItem {
  id: number;
  outlet: string;
  headline: string;
  date: string;
  image: string;
  alt: string;
  url: string;
}

interface MediaCoverageProps {
  mediaItems: MediaItem[];
}

export default function MediaCoverage({ mediaItems }: MediaCoverageProps) {
  return (
    <div className="bg-card rounded-xl shadow-subtle p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="NewspaperIcon" size={28} className="text-primary" />
        <h2 className="text-2xl font-bold text-foreground font-poppins">
          Media Coverage & Recognition
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 border border-border"
          >
            <div className="relative h-48 overflow-hidden">
              <AppImage
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-2">
              <p className="text-xs font-semibold text-primary font-nunito uppercase">
                {item.outlet}
              </p>
              <h3 className="text-sm font-semibold text-foreground font-poppins line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {item.headline}
              </h3>
              <p className="text-xs text-muted-foreground font-source">{item.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
