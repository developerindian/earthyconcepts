import { cn } from '@/lib/utils';

interface NatureWatermarkProps {
  className?: string;
  opacity?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const NatureWatermark = ({ 
  className, 
  opacity = 0.08,
  size = 'md' 
}: NatureWatermarkProps) => {
  const sizeMap = {
    sm: '120px 120px',
    md: '180px 180px',
    lg: '250px 250px',
  };

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Primary leaf pattern - warm beige/sand color */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8a07a'%3E%3Cpath d='M90 10 Q120 50 90 100 Q60 50 90 10 Z'/%3E%3Cpath d='M40 60 Q60 90 40 130 Q20 90 40 60 Z' transform='rotate(-20 40 95)'/%3E%3Cpath d='M140 60 Q160 90 140 130 Q120 90 140 60 Z' transform='rotate(20 140 95)'/%3E%3Cpath d='M90 120 Q105 145 90 175 Q75 145 90 120 Z' opacity='0.6'/%3E%3Cellipse cx='30' cy='150' rx='12' ry='25' transform='rotate(-30 30 150)' opacity='0.5'/%3E%3Cellipse cx='150' cy='150' rx='12' ry='25' transform='rotate(30 150 150)' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: sizeMap[size],
        }}
      />
      
      {/* Secondary scattered leaf shapes */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: opacity * 0.7,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a89070'%3E%3Cpath d='M150 20 Q190 80 150 150 Q110 80 150 20 Z' transform='rotate(15 150 85)'/%3E%3Cpath d='M60 100 Q90 150 60 210 Q30 150 60 100 Z' transform='rotate(-10 60 155)'/%3E%3Cpath d='M240 100 Q270 150 240 210 Q210 150 240 100 Z' transform='rotate(10 240 155)'/%3E%3Cpath d='M100 200 Q120 240 100 285 Q80 240 100 200 Z' opacity='0.7'/%3E%3Cpath d='M200 200 Q220 240 200 285 Q180 240 200 200 Z' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
          backgroundPosition: '50px 50px',
        }}
      />
    </div>
  );
};
