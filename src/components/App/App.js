import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italien',
  rating: '4.5',
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business]


class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businessArray={businesses} />
      </div>
    );
  }
}

export default App;