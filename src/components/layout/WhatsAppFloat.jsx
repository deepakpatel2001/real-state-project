import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '+919098343002'; // Replace with actual WhatsApp number
        const message = 'Hello! I am interested in your real estate services.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className="whatsapp-float flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={30} />
        </button>
    );
};

export default WhatsAppFloat;
