import React from 'react';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TruBalance Bodywork",
    "image": "https://trubalance.life/images/TruBalance-Logo-Final-03.png",
    "@id": "https://trubalance.life",
    "url": "https://trubalance.life",
    "telephone": "385-203-8749", // Add Brenden's business phone here
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "388 W Center St", // Add the Orem clinic address
      "addressLocality": "Orem",
      "addressRegion": "UT",
      "postalCode": "84057",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.2974, // Approximate for Orem
      "longitude": -111.7030
    },
        "openingHoursSpecification": [
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "10:30",
        "closes": "17:00"
    },
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "13:00",
        "closes": "19:00"
    },
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "11:30",
        "closes": "18:00"
    },
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:30"
    },
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "15:30"
    }
    ],
    "sameAs": [
      "https://www.facebook.com/trubalancebodywork", // Add actual social links
      "https://www.instagram.com/miles.and.massage"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}