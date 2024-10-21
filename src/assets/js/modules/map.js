import {color, Marker} from '@googlemaps/adv-markers-utils';
import { Loader } from '@googlemaps/js-api-loader'; // No need to import Marker separately

const position = {
  lat: 50.71001434326172,
  lng: 4.379627704620361
};

const loader = new Loader({
  apiKey: "AIzaSyCk2_hC7CPHWPXlMopr6pA6fuDXY3P1tYQ",
  libraries: ["maps", 'marker']
});

const mapOptions = {
  center: position,
  zoom: 16,
  disableDefaultUI: true,
  mapId: "fdeb675f09921a8e",
};

const init = async () => {
  
  const [mapsLibrary] = await Promise.all([
    loader.importLibrary("maps"),
  ])

  const map = new mapsLibrary.Map(document.getElementById("map"), mapOptions);
  const marke = new Marker({ 
    position: position,
    color: "#C4EBC2",
    map: map,
    title: "Medichenois"
  });
};

export { init };