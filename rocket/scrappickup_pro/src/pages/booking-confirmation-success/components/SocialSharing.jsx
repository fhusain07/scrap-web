import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialSharing = () => {
  const shareMessage = "Just booked a scrap pickup with Nagpur Scrap! 🌱 Easy, eco-friendly, and convenient. Check them out!";
  const shareUrl = window.location?.origin;

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + shareUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-form mb-6">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
        <Icon name="Share2" size={20} className="mr-2 text-primary" />
        Share the Green Initiative
      </h3>
      
      <p className="text-muted-foreground mb-4">
        Help your friends discover our eco-friendly scrap pickup service!
      </p>
      
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={handleWhatsAppShare}
          iconName="MessageCircle"
          iconPosition="left"
        >
          WhatsApp
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleFacebookShare}
          iconName="Facebook"
          iconPosition="left"
        >
          Facebook
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleTwitterShare}
          iconName="Twitter"
          iconPosition="left"
        >
          Twitter
        </Button>
      </div>
    </div>
  );
};

export default SocialSharing;