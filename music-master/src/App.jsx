import React, {Component} from 'react';
import './App.css'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search(){

    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const accessToken = 'BQAcAfdgorrlHY26XYNBlTN35JMpmYMWNlqx2wFLBlM29KLx678LlbIfxCc202WXhtxJKocnA4Q9SzpSbbIi8ZHMOwW1dKOSDm1YEINrHu7T6CfdKR5IY4A9td60i2Eji-oXfhYA8n6Ks48GMHsq-cHj-UY_P9QhS9tEzPMaB7DoG2rwL3yepQ';
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

    //console.log('FETCH_URL', FETCH_URL);
    const myOptions = {
         method: 'GET',
         headers: {
           'Authorization': 'Bearer ' + accessToken
         },
         mode: 'cors',
         cache: 'default'
       };

       fetch(FETCH_URL, myOptions)
         .then(response => response.json())
         .then(json => {
           console.log('artist', json);
           const artist = json.artists.items[0];
           this.setState({ artist });
           console.log(artist.id);

           FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US`;

           fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => {
              const {tracks} = json;
              this.setState({tracks});
            });
   });

  }

  render(){
    return(
      <div className='App'>
        <div className='App-title'>Music Master</div>
        <FormGroup>
          <InputGroup>
          <FormControl
            type='text'
            placeholder = "Search for an Artist"
            value = {this.state.query}
            onChange = {event =>{this.setState({query: event.target.value})}}
            onKeyPress ={event =>{
              if(event.key === 'Enter'){
                this.search()
              }
            }}
          />
          <InputGroup.Addon onClick={() => this.search()}>
            <Glyphicon glyph = 'search'> </Glyphicon>
          </InputGroup.Addon>
        </InputGroup>
        </FormGroup>

        {/* <div className='Profile'>
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div> */}
        {
          this.state.artist != null
          ?
            <div>
              <Profile
                  artist= {this.state.artist}
                />
              {/* <div className='Gallery'>
                Gallery
              </div> */}

            <Gallery
              tracks = {this.state.tracks}
            />
            </div>
          :
          <div> </div>

        }

      </div>
    )
  }

}

export default App;
