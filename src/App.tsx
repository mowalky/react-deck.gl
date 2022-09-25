import { Map } from "react-map-gl";
import DeckGL from "@deck.gl/react/typed";
import { LineLayer } from "@deck.gl/layers/typed";

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiamxnYXJjaGl0ZWN0cyIsImEiOiJja3o1dWR2aGMwdTJtMm9waGpzbmd3a3BiIn0.V4H608HM-Atw3RreSBuXyw";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

function App() {
  const data = [
    {
      sourcePosition: [-122.41669, 37.7853],
      targetPosition: [-122.41669, 37.781],
    },
  ];

  const layers = [new LineLayer({ id: "line-layer", data })];

  return (
    <div
      style={{ position: "absolute", width: "100%", height: "100%", top: "0" }}
    >
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <Map
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        />
      </DeckGL>
    </div>
  );
}

export default App;
