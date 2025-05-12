import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Arreglar el icono que no carga en algunos entornos
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Mapa() {
  useEffect(() => {
    document.title = "Mapa de Restaurantes";
  }, []);

  return (
    <div className="container">
      <h1>Mapa de Restaurantes</h1>
      <p>
        Explora restaurantes típicos del mar y la costa en el siguiente mapa:
      </p>
      <div className="map-wrapper">
        <MapContainer
          center={[-2.15, -79.9]}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-2.15, -79.9]}>
            <Popup>
              Restaurante El Marisco Feliz
              <br />
              Guayaquil, Ecuador
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
