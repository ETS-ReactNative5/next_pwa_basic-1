// eslint-disable no-undef comment is required to avoid google err

/* eslint-disable no-undef */
import React, { Component } from "react";
import { Container } from "../components/Container";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import styles from "../styles/map.module.css";

const GOOGLE_MAP_KEY = "AIzaSyCcXjlA3bLlSEkAeMg-jdB6zIm-4gE4lQs";

const propertyData = [
  {
    id: 1001,
    address: "Sadhu Vasvani Nagar,Aundh, Pune, Maharashtra 411007",
    lat: 18.550351,
    lng: 73.818586,
    price: "2cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
  },
  {
    id: 1002,
    address:
      "Sheetaley Harmony Society, Ward No. 8, Wireless Colony, Aundh Pune, Maharashtra 411007",
    lat: 18.563942,
    lng: 73.806881,
    price: "3cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
  },
  {
    id: 1003,
    address: "Riviresa Society Baner, Pune, Maharashtra 411045",
    lat: 18.55671,
    lng: 73.794575,
    price: "5cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
  },
  {
    id: 1004,
    address: "Saidatta Apartments Baner, Pune, Maharashtra 411045",
    lat: 18.561795,
    lng: 73.786636,
    price: "4cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
  },
  {
    id: 1005,
    address:
      "Laxmi Society Model Colony, Shivajinagar, Pune, Maharashtra 411016",
    lat: 18.536282,
    lng: 73.830237,
    price: "5cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
  },
  {
    id: 1006,
    address: "Revenue Colony ,Shivajinagar, Pune, Maharashtra 411005",
    lat: 18.526028,
    lng: 73.847403,
    price: "3cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
  },

  {
    id: 1007,
    address: "Kalachowki Nashik, Maharashtra 422003",
    lat: 20.01389,
    lng: 73.794084,
    price: "6cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
  },
  {
    id: 1008,
    address: "Rajkot",
    lat: '25.731111',
    lng: '75.5925',
    price: "5cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
},
{
  id: 1009,
    address: "Kalyan-Dombivali, Maharashtra 422003",
    name: 'Kalyan-Dombivali',
    state: 'Maharashtra',
    lat: '19.235433',
    lng: '73.129889',
    price: "5cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
},
{
  id: 1010,
    address: "Vasai-Virar, Maharashtra 422003",
    name: 'Vasai-Virar',
    state: 'Maharashtra',
    lat: '19.4258788',
    lng: '72.8224901',
    price: "5cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
},
{
  id: 1011,
  address: "Varanai, UP",
    lat: '25.333333',
    lng: '83',
    price: "5cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
},
{
  id: 1012,
  address: "Srinagar, J&K",
    lat: '30.216667',
    lng: '78.783333',
    price: "5cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
},
{
  id: 1013,
  address: "Aurangabad, Maharashtrs",
    lat: '26.596',
    lng: '79.9701',
    price: "5cr",
    img:
      "https://imgsj.indiaproperty.com/property-images/766/6816766/t3_6816766_9911.jpeg",
},

];

const {
  DrawingManager,
    } = require("react-google-maps/lib/components/drawing/DrawingManager");

const {
  MarkerClusterer,
    } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const DrawingManagerWrapper = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div className={styles.map}/>,
    containerElement: <div className={styles.map} />,
    mapElement: <div className={styles.map}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    zoom={props.zoomMap}
    center={props.zoomLocationLat && props.zoomLocationLng ?
      new google.maps.LatLng(props.zoomLocationLat, props.zoomLocationLng) : 
      new google.maps.LatLng(18.521609, 73.854105)
    }
    disableDefaultUI={false}
    defaultOptions={{
      styles:[
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }]
    }}
  >
    {props.mapDrawing ? (
      <DrawingManager
        setMap={props.removePolygon ? null : GoogleMap}
        onPolygonComplete={props.onDrawCompleted}
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.POLYGON],
          },
          polygonOptions: {
            fillColor: "#199ee0",
            fillOpacity: 0.2,
            strokeWeight: 2,
            strokeColor: "#113460",
            clickable: true,
            editable: true,
            geodesic: false,
            visible: true,
            zIndex: 1,
          },
        }}
      />
    ) : null}

    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={100}
    >
      {props.markerList &&
        props.markerList.map((marker, i) => {
          return (
            <Marker 
              onClick={() => props.onMarkerClick(this, marker)}
              //icon="/images/homeIcon.svg"
              key={i}
              label={marker.price}
              position={{
                lat: parseFloat(marker.lat),
                lng: parseFloat(marker.lng),
              }}
              options={{ userData: marker }}
            />
          );
        })}
    </MarkerClusterer>
  </GoogleMap>
));

class BasicMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapDrawing: false,
      removePolygon: true,
      selectedAreaPath: null,
      filterMarkerList: null,
      markers: propertyData,
      poly: null,
      ClusterData:propertyData,
      zoomMap:10,
      zoomLocationLng:null,
      zoomLocationLat:null,
    };
  }

  onMarkerClick = (e, marker) => {
    console.log("marker click", marker);
    var data = [];
    data.push(marker);
    this.setState({ ClusterData: data });
  };

  removePolygon = () => {
    if(this.state.poly){
        this.state.poly.setMap(null);
        this.setState({
            poly:null,
            markers:propertyData,
            ClusterData:propertyData
        });
    }
}

  onMarkerClustererClick = (e) => {
    console.log("clst", e);
    const markers = e.getMarkers();
    console.log(`Current clicked Cluster length: ${markers.length}`);
    console.log(markers);
    var data = [];
    markers.map((marker, i) => {
      data.push(marker.userData);
    });
    this.setState({ ClusterData: data });
    console.log(this.state.ClusterData);
  };


  onDrawCompleted = (poly) => {
    if (this.state.poly) {
      this.state.poly.setMap(null);
      this.setState({ poly: null, markers: propertyData });
    }
    this.updateMarkers(poly);
    //Events
    google.maps.event.addListener(poly.getPath(), "set_at", () =>
      this.updateMarkers(poly)
    );
    // google.maps.event.addListener(poly.getPath(), 'insert_at', function() {
    //     console.log("insert called");
    // });
    // google.maps.event.addListener(poly.getPath(), 'remove_at', function() {
    //     console.log("remove_at called");
    // });
  };

 
    //this method is called when polygon is added on map or added polygon is updated
     updateMarkers = (poly) => {
    let polyMarkers = [];
    let polyArray = poly.getPath().getArray();

    let paths = [];
    let zoomLocationLats = [], zoomLocationLngs = [];

    polyArray.forEach(function (path) {
      paths.push({ lat: path.lat(), lng: path.lng() });
    });

    console.log("OnComplete:", paths);
    var polyPoints = new google.maps.Polygon({
      paths: paths,
    });


    propertyData.map((data, i) => {
      const point = new google.maps.LatLng(
        parseFloat(data.lat),
        parseFloat(data.lng)
      );
      if (google.maps.geometry.poly.containsLocation(point, polyPoints)){
        polyMarkers.push(data);
        zoomLocationLats.push(parseFloat(data.lat));
        zoomLocationLngs.push(parseFloat(data.lng));
      }
    });

    //create average lat lng of the points to set the zoom level to proper LatLng
    let latAverage = this.locationAvg(zoomLocationLats);
    let lngAverage = this.locationAvg(zoomLocationLngs);

    this.setState({ 
            markers: polyMarkers,
            ClusterData : polyMarkers,
            selectedAreaPath: paths, 
            poly: poly,
            zoomMap:15,
            zoomLocationLat:latAverage,
            zoomLocationLng:lngAverage
         });
  };

  locationAvg = arr => {
    let average = arr.reduce((a,b) => a + b, 0) / arr.length;
    return average;
  }

  mapDrawingHandler = () => {
    this.setState({ mapDrawing: !this.state.mapDrawing });
  };


  getMarkerOrCluster = () => {
      return this.state.ClusterData ? this.state.ClusterData : this.state.markers;
  }

  render() {
    return (
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.homes}>
               {this.getMarkerOrCluster().map((data, i) => (
                <div className={styles.card}>
                <h3>{i + 1}</h3>
                  <img src={`${data.img}`} width="200px" height="100px" />
                  <h5>{data.price}</h5>
                  <h6>{data.address}</h6>
                </div>
              ))}
            </div>
            <div>
              <div className={styles.actionButtons}>
              <button  className={styles.actionButton} onClick={() => this.mapDrawingHandler()}>
                {" "}
                Draw On Map
              </button>
              <button  className={styles.actionButton} onClick={() => this.removePolygon()}>
                {" "}
                Remove Polygon
              </button>
              </div>
              
              <DrawingManagerWrapper
                   mapDrawing={this.state.mapDrawing}
                   removePolygon={this.state.removePolygon}
                   onDrawCompleted={(res) => this.onDrawCompleted(res)}
                   onMarkerClick={(res,marker) => this.onMarkerClick(res,marker)}
                   onMarkerClustererClick={(e) => this.onMarkerClustererClick(e)}
                   markerList={this.state.markers}
                   zoomMap={this.state.zoomMap}
                   zoomLocationLat={this.state.zoomLocationLat}
                   zoomLocationLng={this.state.zoomLocationLng}
               />
            </div>

          </div>
        </Container>
    );
  }
}
export default BasicMap;
