import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "9898894485"; 
  const message = "Hello, I want to know more about your products";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition duration-300">
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16.001 3C8.821 3 3 8.821 3 16c0 2.875.938 5.53 2.53 7.686L3 29l5.48-2.48A12.93 12.93 0 0016.001 29C23.18 29 29 23.179 29 16S23.18 3 16.001 3zm0 23.5c-2.34 0-4.53-.73-6.34-1.98l-.45-.3-3.25 1.47.7-3.16-.29-.47A10.45 10.45 0 015.5 16c0-5.8 4.7-10.5 10.5-10.5S26.5 10.2 26.5 16 21.8 26.5 16.001 26.5zm5.74-7.84c-.31-.16-1.82-.9-2.1-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.22-.67.08-.31-.16-1.3-.48-2.48-1.52-.92-.82-1.54-1.82-1.72-2.13-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.54-.08-.16-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.08-.8.38s-1.05 1.02-1.05 2.48c0 1.46 1.07 2.88 1.22 3.08.16.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.07-.12-.27-.2-.58-.36z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;