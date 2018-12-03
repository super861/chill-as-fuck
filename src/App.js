import React, { Component } from 'react';
import NavBar from './views/components/NavBar';
import HomeComponent from './views/home/HomeComponent';


class App extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <HomeComponent />
            </div>
        )
    }
}

export default App;
