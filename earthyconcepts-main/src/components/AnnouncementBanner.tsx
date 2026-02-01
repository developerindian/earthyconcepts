import { MessageCircle } from 'lucide-react';

export const AnnouncementBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container flex items-center justify-center gap-2 text-sm">
        <MessageCircle className="h-4 w-4" />
        <span>
          Order via WhatsApp for quick and easy ordering
        </span>
        <a
          href="https://wa.me/971XXXXXXXXX?text=Hello%20Earthy%20Concepts%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Chat Now
        </a>
      </div>
    </div>
  );
};
