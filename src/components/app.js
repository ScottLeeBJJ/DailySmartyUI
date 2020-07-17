import React, { Component } from 'react';
import Logo from '../components/logo';
import SearchBar from '../components/searchBar';
import RecentPost from './recentPost';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPost />
      </div>
    );
  }
}
