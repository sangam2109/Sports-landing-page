import React from "react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const galleryImage = {
  src: "src/assets/gallery.png", // Replace with actual gallery screenshot
  alt: "Athletic Meet Gallery",
  link: "https://gallery.gndecathletix.games",
};

const Gallery: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col items-center justify-center py-16 px-6">
      <h2 className="text-4xl font-bold mb-4">🏆 Athletic Meet Gallery</h2>
      <p className="text-gray-700 mb-6 text-lg">Relive the excitement and energy of our events!</p>

      <div className="w-full max-w-6xl flex justify-center">
        <a
          href={galleryImage.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block transform transition duration-300 hover:scale-105"
        >
          <Image
            src={galleryImage.src}
            alt={galleryImage.alt}
            width={2000} // Increased size
            height={2000} // Increased height
            className="rounded-lg shadow-lg border border-gray-500"
          />
        </a>
      </div>

      <Button
        className="mt-8 text-lg px-6 py-3 bg-white text-black border-2 border-black rounded-lg shadow-md hover:bg-gray-200 transition"
        onClick={() => window.open(galleryImage.link)}
      >
        📸 Explore Full Gallery
      </Button>
    </div>
  );
};

export default Gallery;
