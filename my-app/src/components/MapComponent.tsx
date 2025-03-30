type MapProps = {
    latitude: number;
    longitude: number;
  };
  
  export default function MapComponent({ latitude, longitude }: MapProps) {
    const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&layer=mapnik&marker=${latitude},${longitude}`;
  
    return (
      <iframe
        width="100%"
        height="120%"
        src={mapSrc}
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    );
  }
  