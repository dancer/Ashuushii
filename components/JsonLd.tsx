export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ashuushii",
    "url": "https://ashuushii.com",
    "sameAs": [
      "https://twitter.com/ashuushii",
      "https://x.com/ashuushii",
      "https://www.youtube.com/@ashuushii",
      "https://www.instagram.com/ashuushii",
      "https://www.tiktok.com/@ashuushii",
      "https://www.twitch.tv/ashiip0o",
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