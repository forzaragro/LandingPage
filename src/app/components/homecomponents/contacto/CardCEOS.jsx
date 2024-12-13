"use client";
import {React, useState, useEffect } from "react";

const contacts = [
  {
    name: "Diego",
    lastName: "Baggio",
    phone: "+543471-418377",
    email: "john.doe@example.com",
    image: "/images/diego-fondo-blanco.png",
  },
  {
    name: "Luis",
    lastName: "Paoloni",
    phone: "+543467-629181",
    email: "jane.smith@example.com",
    image: "/images/Luis-Fondo-Gris.webp",
  },
  {
    name: "gonzalo",
    lastName: "Frizzolo",
    phone: "+543471-587042",
    email: "bob.johnson@example.com",
    image: "/images/gonzalo-Fondo-Gris.webp",
  },
];

function ContactCard({ contact }) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (copiedPhone) setShowPhoneTooltip(true);
    if (copiedEmail) setShowEmailTooltip(true);
    const timer = setTimeout(() => {
      setShowPhoneTooltip(false);
      setShowEmailTooltip(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copiedPhone, copiedEmail]);

  return (
    <div className="w-full max-w-sm  bg-dividerColor bg-opacity-10 rounded-lg hover:shadow-md hover:transform-gpu overflow-hidden font-montserrat ">
      <div className="flex flex-col items-center p-6 ">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img src={contact.image} alt={`${contact.name} ${contact.lastName}`} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold mb-2">
          {contact.name} {contact.lastName}
        </h2>
        <div className="relative w-full mb-2">
          <button
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
            onClick={() => copyToClipboard(contact.phone, setCopiedPhone)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {copiedPhone ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              )}
            </svg>
            {contact.phone}
          </button>
          {showPhoneTooltip && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2">
              {copiedPhone ? "Copiado!" : "Copiar al portapapeles"}
            </div>
          )}
        </div>
        <div className="relative w-full mb-2">
          <button
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
            onClick={() => copyToClipboard(contact.email, setCopiedEmail)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {copiedEmail ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              )}
            </svg>
            {contact.email}
          </button>
          {showEmailTooltip && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2">
              {copiedEmail ? "Copiado!" : "Copiar al portapapeles"}
            </div>
          )}
        </div>
        <a
          href={`https://instagram.com/${contact.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-acentColor hover:text-darkPrymaryColor"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.443.647-1.443 1.444 0 .796.647 1.444 1.443 1.444.797 0 1.444-.648 1.444-1.444 0-.797-.648-1.444-1.444-1.444z" />
          </svg>
          Instagram
        </a>
      </div>
    </div>
  );
}

const CardCEOS = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export { CardCEOS };
