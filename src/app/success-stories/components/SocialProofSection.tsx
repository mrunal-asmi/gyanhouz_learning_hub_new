'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SocialPost {
  id: number;
  platform: string;
  author: string;
  content: string;
  likes: number;
  shares: number;
  date: string;
}

interface SocialProofSectionProps {
  posts: SocialPost[];
}

export default function SocialProofSection({ posts }: SocialProofSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const currentPost = posts[currentIndex];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="ChatBubbleBottomCenterTextIcon" size={28} className="text-primary" />
        <h2 className="text-2xl font-bold text-foreground font-poppins">
          What Parents Are Saying on Social Media
        </h2>
      </div>

      <div className="relative bg-card rounded-xl p-8 shadow-subtle">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="UserCircleIcon" size={32} className="text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-lg font-semibold text-foreground font-poppins">
                  {currentPost.author}
                </p>
                <p className="text-sm text-muted-foreground font-source">
                  {currentPost.platform} • {currentPost.date}
                </p>
              </div>
            </div>
            <p className="text-base text-foreground font-source leading-relaxed">
              {currentPost.content}
            </p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <Icon name="HeartIcon" size={20} className="text-error" />
                <span className="text-sm text-muted-foreground font-source">
                  {currentPost.likes} likes
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShareIcon" size={20} className="text-secondary" />
                <span className="text-sm text-muted-foreground font-source">
                  {currentPost.shares} shares
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
          <button
            onClick={prevPost}
            className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Previous post"
          >
            <Icon name="ChevronLeftIcon" size={20} className="text-primary" />
          </button>
          <div className="flex items-center space-x-2">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                }`}
                aria-label={`Go to post ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextPost}
            className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Next post"
          >
            <Icon name="ChevronRightIcon" size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
