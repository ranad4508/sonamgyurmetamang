import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsappFloat() {
  // WhatsApp number from the footer
  const whatsappNumber = "+9779766883351";

  // WhatsApp API URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative">
        <FaWhatsapp size={35} />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
    </Link>
  );
}
