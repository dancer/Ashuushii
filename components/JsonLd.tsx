export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ashuushii",
    "url": "https://ashuushii.com",
    "sameAs": [
      "https://twitter.com/ashuushii",
      // Add other social media URLs
    ],
    "description": "Gamer, Streamer, and Content Creator known as Ashuushii",
    "image": "https://ashuushii.com/metadata.png"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 