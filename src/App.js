// mapping libs
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { Icon } from 'leaflet';

// mock-data
import * as parkData from './mock-data/skateparks.json';

// styles
import 'leaflet/dist/leaflet.css'; // leaflet styles
import './styles/app.css';

function App() {
  // map vars
  const center = [49.246292, -123.116226]; // Vancouver
  const initialZoom = 11; // maxZoom = 16 for nat Geo esri tiles (varies by location)
  const tileURL =
    'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
  const tileAttr = 'Tiles &copy; Esri &mdash; National Geographic, ';

  return (
    <div className="leaflet-container">
      <MapContainer center={center} zoom={initialZoom}>
        <TileLayer url={tileURL} attribution={tileAttr} />
      </MapContainer>
    </div>
  );
}

export default App;
