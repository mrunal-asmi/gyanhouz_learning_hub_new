'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  id: number;
  childName: string;
  age: number;
  projectTitle: string;
  projectImage: string;
  projectImageAlt: string;
  category: string;
  description: string;
  skills: string[];
  date: string;
}

interface AchievementGalleryProps {
  achievements: Achievement[];
}

const AchievementGallery = ({ achievements }: AchievementGalleryProps) => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-card rounded-xl shadow-brand overflow-hidden hover:shadow-lg transition-smooth cursor-pointer group"
            onClick={() => setSelectedAchievement(achievement)}
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <AppImage
                src={achievement.projectImage}
                alt={achievement.projectImageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-smooth">
                <p className="text-white text-sm font-semibold line-clamp-2">
                  {achievement.projectTitle}
                </p>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 bg-brand-orange rounded-lg">
                <p className="text-white text-xs font-semibold">{achievement.category}</p>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-base font-bold text-foreground mb-1">{achievement.childName}</h3>
              <p className="text-sm text-muted-foreground mb-3">{achievement.age} years old</p>
              <p className="text-sm text-foreground line-clamp-2 mb-3">{achievement.description}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{achievement.date}</span>
                <div className="flex items-center space-x-1 text-brand-orange">
                  <Icon name="EyeIcon" size={14} />
                  <span>View Details</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-card rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Project Details</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-muted rounded-lg transition-smooth"
                aria-label="Close modal"
              >
                <Icon name="XMarkIcon" size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <AppImage
                  src={selectedAchievement.projectImage}
                  alt={selectedAchievement.projectImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {selectedAchievement.projectTitle}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      By {selectedAchievement.childName} • {selectedAchievement.age} years old
                    </p>
                  </div>
                  <div className="px-3 py-1.5 bg-brand-orange/10 rounded-lg">
                    <p className="text-sm font-semibold text-brand-orange">
                      {selectedAchievement.category}
                    </p>
                  </div>
                </div>

                <p className="text-base text-foreground mb-6">{selectedAchievement.description}</p>

                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Skills Developed:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedAchievement.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium text-foreground"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Completed on {selectedAchievement.date}
                </p>
                <button className="flex items-center space-x-2 px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-red transition-smooth">
                  <Icon name="ShareIcon" size={16} />
                  <span className="text-sm font-semibold">Share Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementGallery;
