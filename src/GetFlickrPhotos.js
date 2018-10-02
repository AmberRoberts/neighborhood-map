  return new Promise(function(resolve, reject){

  export function getFlickrPhotos(query) {
    window.jsonFlickrApi = function(json){
      let photos_list = [];

      for(let photo of json.photos.photo) {
        var farm = photo.farm;
        var id = photo.id;
        var secret = photo.secret;
        var server = photo.server;

        var img = 'https://farm' + farm + '.staticflickr.com/' + server +
        '/' + id + '_' + secret + '.jpg';

        let Photo = Object.assign({}, photo, { img: img });

        photos_list.push(Photo);
      }

      resolve(photos_list);

      delete window.jsonFlickrApi;
    }

    var flickrAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5329189e567376e01e123a6f21641b4d&tags=hagnau+am+bodensee&format=json&callback=?';

    window.$.ajax({
      url: flickrAPI,
      dataType: 'jsonp',
      success: function(resp) {
        console.log(resp);
      }
    });
  });
}


// Put this in another place:

import React, { Component } from 'react';
import { GetFlickrPhotos } from './GetFlickerPhotos';

class Sidebar extends Component {
  state = {
    photos_list: []
  }

  componentWillMount() {
    getFlickrPhotos('garden').then(photos_list => {
      this.setState({ photos_list });
    });
  }

  render() {
    return (
      < ul >
        {
          this.state.photos_list.map((photo, key) => (
            < li key={key}>
              < img alt={photo.title + ' - ' + photo.owner} src={photo.img} / >
            < / li >
          ));
        }
      < / ul >
    );
  }
}

export default Sidebar;
