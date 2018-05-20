import React, { Fragment } from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import { Card, Icon, Image } from "semantic-ui-react";

const Marker = ({ lat, lng, logo, name, time, location, color }) => (
  <MarkerWithLabel
    icon="majs"
    labelAnchor={{ lat: lat, lng: lng }}
    labelStyle={{
      backgroundColor: "transparent"
    }}
    position={{ lat: lat, lng: lng }}
  >
    <Card color={color} fluid>
      <Image src={logo} width="100" float="left" />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta> {location}</Card.Meta>
        <Card.Description>{time}</Card.Description>
      </Card.Content>
    </Card>
  </MarkerWithLabel>
);

const getRoute = name => {
  switch (name) {
    case name === "tuesday":
      return {
        origin: { lat: 60.382121, lng: 5.328606 },
        destination: { lat: 60.3813513, lng: 5.3269174 },
        waypoints: [
          {
            location: { lat: 60.4155967, lng: 5.314902 },
            stopover: true
          },
          {
            location: { lat: 60.3958952, lng: 5.3166018 },
            stopover: true
          }
        ],
        travelMode: google.maps.TravelMode.WALKING
      };
      break;
    case name === "wednesday":
      return {
        origin: { lat: 60.406262, lng: 5.3201295 },
        destination: { lat: 60.4014446, lng: 5.3133913 },
        waypoints: [
          {
            location: { lat: 60.3994968, lng: 5.3091189 },
            stopover: true
          },
          {
            location: { lat: 60.3875797, lng: 5.3325806 },
            stopover: true
          }
        ],
        travelMode: google.maps.TravelMode.WALKING
      };
      break;
    case name === "thursday":
      return {
        origin: { lat: 60.386839, lng: 5.3303004 },
        destination: { lat: 60.3854768, lng: 5.3305841 },
        waypoints: [
          {
            location: { lat: 60.3235893, lng: 5.3696218 },
            stopover: true
          }
        ],
        travelMode: google.maps.TravelMode.WALKING
      };
      break;
    case name === "friday":
      return {
        origin: { lat: 60.4020948, lng: 5.3180311 },
        destination: { lat: 60.3812588, lng: 5.3298212 },
        waypoints: [
          {
            location: { lat: 60.4000426, lng: 5.3019483 },
            stopover: true
          },
          {
            location: { lat: 60.382121, lng: 5.328606 },
            stopover: true
          }
        ],
        travelMode: google.maps.TravelMode.WALKING
      };
      break;
    default:
      return {
        origin: { lat: 60.382121, lng: 5.328606 },
        destination: { lat: 60.3813513, lng: 5.3269174 },
        waypoints: [
          {
            location: { lat: 60.4155967, lng: 5.314902 },
            stopover: true
          },
          {
            location: { lat: 60.3958952, lng: 5.3166018 },
            stopover: true
          }
        ],
        travelMode: google.maps.TravelMode.WALKING
      };
  }
};

export const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyClpyOCwWCTjjOl_MWARCI1_SE-5rHSKT0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const TuesdayDirection = new google.maps.DirectionsService();
      const WednesdayDirection = new google.maps.DirectionsService();
      const ThursdayDirection = new google.maps.DirectionsService();
      const FridayDirection = new google.maps.DirectionsService();
      const MondayDirection = new google.maps.DirectionsService();

      TuesdayDirection.route(
        {
          origin: { lat: 60.382121, lng: 5.328606 },
          destination: { lat: 60.3813513, lng: 5.3269174 },
          waypoints: [
            {
              location: { lat: 60.4155967, lng: 5.314902 },
              stopover: true
            },
            {
              location: { lat: 60.3958952, lng: 5.3166018 },
              stopover: true
            }
          ],
          travelMode: google.maps.TravelMode.WALKING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              tuesdayDirections: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
      WednesdayDirection.route(
        {
          origin: { lat: 60.406262, lng: 5.3201295 },
          destination: { lat: 60.4014446, lng: 5.3133913 },
          waypoints: [
            {
              location: { lat: 60.3994968, lng: 5.3091189 },
              stopover: true
            },
            {
              location: { lat: 60.3875797, lng: 5.3325806 },
              stopover: true
            }
          ],
          travelMode: google.maps.TravelMode.WALKING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              wednesdayDirections: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
      ThursdayDirection.route(
        {
          origin: { lat: 60.386839, lng: 5.3303004 },
          destination: { lat: 60.3854768, lng: 5.3305841 },
          waypoints: [
            {
              location: { lat: 60.3235893, lng: 5.3696218 },
              stopover: true
            }
          ],
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              thursdayDirections: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
      FridayDirection.route(
        {
          origin: { lat: 60.3809264, lng: 5.3270575 },
          destination: { lat: 60.3812588, lng: 5.3298212 },
          waypoints: [
            {
              location: { lat: 60.4000426, lng: 5.3019483 },
              stopover: true
            },
            {
              location: { lat: 60.382121, lng: 5.328606 },
              stopover: true
            }
          ],
          travelMode: google.maps.TravelMode.WALKING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              fridayDirections: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
      MondayDirection.route(
        {
          origin: { lat: 60.3812588, lng: 5.3298212 },
          destination: { lat: 60.3383078, lng: 5.2434823 },
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              mondayDirections: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  })
)(props => (
  <Fragment>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 60.382121, lng: 5.328606 }}
    >
      <Fragment>
        {props.visible === "tuesday" && (
          <Fragment>
            <DirectionsRenderer directions={props.tuesdayDirections} />
            <Marker
              name="1. Hatch"
              logo="https://js.undercurrentnews.com/wp-content/uploads/2017/12/Hatch_Logo_cmyk_orange-copy-e1513768916433.png"
              lat={60.382121}
              lng={5.328606}
              location="Hatch Office"
              time="Monday: 11:30-12:30"
              color="red"
            />
            <Marker
              name="2. Marine Harvest"
              logo="http://marineharvest.no/Content/Images/logo.png"
              lat={60.4155967}
              lng={5.314902}
              location="Sandviksbodene 77A"
              time="Monday: 11:30-12:30"
              color="red"
            />
            <Marker
              name="3. Grieg Seafood"
              logo="https://ilaks.no/wp-content/uploads/2014/02/grieg_eckbg7ohnj481qclutkbbxjma.gif"
              lat={60.3958952}
              lng={5.3166018}
              location="C. Sundts gate 17"
              time="Monday: 13:00-15:00"
              color="red"
            />
            <Marker
              name="4. Bangladesh Delegation"
              logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAflBMVEUAak70KkEAbU/7JkD4KEEAbk/6J0H+JEAAaU7YNUN0V0qLUUjIPETtLEFpWUrBP0W3QkXcM0MoZU2dS0elSEfoLkKpR0YeZU3WNkPjMELQOUSPUEguZE2EUkmuRkYVZ00/YkycTkiWT0hqWUp7VUliW0tVXktFYUy1Q0WhSkdeg20aAAADyElEQVR4nO3d3XaiMBQFYDmJREVEbaugbW1rseP7v+AE0Trt6qyjSJIm7O+KS7NXEhLJT68HAAAAAAAAAAAAAAAAAAAA8AVV+rXDs+sf9KvoPJZlssjyIpVCCZkWebZIyiVyOtAplPtVqoSIpZRRTT/FQqh0tS97HY+JaL4eSxWfovlOxkqu1o/dTYk2SS7E/+L5jEmIYbLpZEi0y2I2n1NKcbbrXEi0zdVl+RxTUsNtp0LqT2ZXBVSHVEz6rn+4LfQxvDqgOqTZRydqEg2mjQKqQ5oOwg+JRlHcMKBKHI2CzyhTNwRUUdnAdRlMol16SxU6VqQ04AFAP2ncC/1LqiTUVxtNb21kJ2oaaD3KRUsJRZHIXRfGhE1xezd0Fhcb1wVq3eahjW7oTD4sXRepZW0npDNKw6pHg6LthKp6FNIAiWbtJ6QzmoXzXqNxmz31WTwOJaP+fVvjoe/UfRhjSBqZSkhnFMak9tFEP3QiH10XrwVmuurPiALosmnf3rTjJ2LvfUYvZhPSGb24LuKNzDaziu9NjZ7Mvc1O1JPfGRkPqOK6kLeghZlh9Vdi4XE12pjuq48Z+Tvnp2cblUjP1Z69rUYbOwnpjHytRnRnp53plnbnazVKLSUURanrojZkcIb/nRq5LmwjtDI9sD6TKy9b2txWT1QRc9fFbYDWViNae1iNaGivnemWlnsY0dJmJfJyhE3vliN6964aUWaznemW5t9iEbI3bqw9eBfR3N64saa8e+2P7HZFujPybYBNe1uz/JPYt08hNLbbW+v+2rcP/GRgtQwTUeFbRLZ7a90ZeRbR0n5EyrOVfTsHEe1cF/o6W9vvfN3QJq4LfRXbM7RDRH7N0ihxEFHiV0RvDiJ68yuiVwcRvSKiwCJCQ+Ogu2bhpc+bYOjIwQSEhWksixw0NL+6IvylxsMfsyz8vc/DRyIWPjWy8MGahWUPLCye4WEJFgsL+VhYDsrDomIWlqbzsMGBh20yHGy24mHLHgsbP3nYPsyyswk99nkTOo4y4OFADB6OVeHhcB6W8SOevB01nhk+KGzof0I4bu4CtDV4aGEgl4Pg6EseDlDl4RheHg5z5uFIcB4OlufheoIL4JILFq5K4eHCHR6ubbpEC5d/uS6CabhCjkeDP7iIkNP8OsthN66zrDS8FHUb7ovsB7ha9wK0yyQuaGbQANd8s3BZ/CV08cu7VaqEiKU8RaWfYiFUutqXvY7nc0REyzJZZHmRRkIJmRZ5tkjKJSGeL6jSrx2eXf8gAAAAAAAAAAAAAAAAAAAA8MpfXtNLBDueqsEAAAAASUVORK5CYII="
              lat={60.3813513}
              lng={5.3269174}
              location="Hatch Office"
              time="Monday 16:00-17:00"
              color="red"
            />
          </Fragment>
        )}
        {props.visible === "wednesday" && (
          <Fragment>
            <DirectionsRenderer directions={props.wednesdayDirections} />
            <Marker
              name="5. SalmoBreed"
              logo="http://d3if16bg953ixu.cloudfront.net/logos/_220xAUTO_crop_center-center_100/Salmobreed-logo.png?mtime=20160905163711"
              lat={60.406262}
              lng={5.3201295}
              location="Sjøgaten 3A"
              time="Tuesday 09:00-10:30"
              color="blue"
            />
            <Marker
              name="6. Cargill"
              logo="https://www.cargill.com/static/cargill-timeline-resources/images/c150_2002_logo.png"
              lat={60.3994968}
              lng={5.3091189}
              location="Tollbodallmenningen 1B"
              time="Tuesday 11:00-13:30"
              color="blue"
            />
            <Marker
              name="7. Thommessen"
              logo="https://www.dnjobb.no/getasset/1f8425b7-48cd-4c23-b3e1-a3e681dde117/"
              lat={60.3875797}
              lng={5.3325806}
              location="Vestre Strømkaien 7"
              time="Wednesday 14:00-15:00"
              color="blue"
            />
            <Marker
              name="8. Lerøy"
              logo="https://www.leroyseafood.com/content/img/logo.png"
              lat={60.4014446}
              lng={5.3133913}
              location="Bontelabo 2"
              time="Wednesday 15:30-17:00"
              color="blue"
            />
          </Fragment>
        )}
        {props.visible === "thursday" && (
          <Fragment>
            <DirectionsRenderer directions={props.thursdayDirections} />
            <Marker
              name="9. Hordaland County"
              logo="http://www.olympiatoppen.no/image34601-900x0.jpg"
              lat={60.386839}
              lng={5.3303004}
              location="Agnes Mowinckels gate 5"
              time="Thursday 10:30-12:00"
              color="blue"
            />
            <Marker
              name="10. Anderaa Data Instruments"
              logo="https://www.environmental-expert.com/files/8924/images/download1-400.jpg"
              lat={60.3235893}
              lng={5.3696218}
              location="Sanddalsringen 5, 5225 Nesttun"
              time="Thursday 12:30-15:00"
              color="blue"
            />
            <Marker
              name="11. Kverva Tech Invest"
              logo="https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=KKReL10riibjkQTxxD7RWyY6Nm4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjtccDXeOb18kASe31XjQBnfO21SDbpE465Io26dY4ii5e0cpP5aRUPbhU4hGUB_N88"
              lat={60.3854768}
              lng={5.3305841}
              location="Lars Hillers Gate"
              time="Thursday 15:30-17:00"
              color="blue"
            />
          </Fragment>
        )}
        {props.visible === "friday" && (
          <Fragment>
            <DirectionsRenderer directions={props.fridayDirections} />
            <Marker
              name="12. Salmon Group"
              logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjEh_mhLTlNfJD2COPExj4Q35wTAzy6aX5DLJGSxCW4IkiaNC"
              lat={60.3809264}
              lng={5.3270575}
              location="Thormøhlensgate 53 D, 5006 Bergen"
              time="Friday 10:30-11:30"
              color="green"
            />
            <Marker
              name="13. Insititute of Marine Research"
              logo="https://www.barentswatch.no/contentassets/a397a4410b8c4465aac8d0c2f4c76a29/hisymbol_bla_cm_2_none.jpeg?preset=Logo"
              lat={60.4000426}
              lng={5.3019483}
              location="Nordnesgaten 50, 5005 Bergen"
              time="Friday 12:00-13:00"
              color="green"
            />
            <Marker
              name="14. Lunch at Hatch"
              logo="https://js.undercurrentnews.com/wp-content/uploads/2017/12/Hatch_Logo_cmyk_orange-copy-e1513768916433.png"
              lat={60.382121}
              lng={5.328606}
              location="Hatch Office"
              time="Friday: 13:00-13:30"
              color="green"
            />
            <Marker
              name="15. MSD Animal Health"
              logo="https://pbs.twimg.com/profile_images/871776672864804865/E6_Eo7tK_400x400.jpg"
              lat={60.3812588}
              lng={5.3298212}
              location="Thormøhlens Gate 55"
              time="Friday: 13:30-14:30"
              color="green"
            />
          </Fragment>
        )}
        {props.visible === "monday" && (
          <Fragment>
            <DirectionsRenderer directions={props.mondayDirections} />
            <Marker
              name="16. Pharmaq Analytic"
              logo="https://www.pharmaq-analytiq.com/sfiles/0/5/picture/pharmaq_analytiq-org-adl.png"
              lat={60.3812588}
              lng={5.3298212}
              location="Thormøhlensgate 55, 5006 Bergen"
              time="Monday 11:00-12:30"
              color="teal"
            />
            <Marker
              name="17. Nofima"
              logo="https://pbs.twimg.com/profile_images/347502899/nofima_rgb_hoy.jpg"
              lat={60.3383078}
              lng={5.2434823}
              location="Kjerreidvika 16, 5141 Fyllingsdalen"
              time="Monday 15:00-16:30"
              color="teal"
            />
          </Fragment>
        )}
      </Fragment>
    </GoogleMap>
  </Fragment>
));
