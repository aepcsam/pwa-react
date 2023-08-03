import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import { Typography, AppBar, CssBaseline, CardActions, CardContent, CardMedia, Grid, Toolbar } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import Navbar from './Navbar/Navbar';

class App extends Component {

    state = {
        advice: ''
    }

    componentDidMount() {
        console.log("Component Did Mount");
        this.fetchAdvice()

    }

    fetchAdvice() {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip
                console.log(advice)
                this.setState({ advice })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    render() {
        const { advice } = this.state
        return (<>
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar>
                    <PhotoCamera />
                    <Typography varient='h6'>
                        Photo Album
                    </Typography>
                    <div className="navbar_nav">
                        <ul>
                            <li className="nav_item active">
                                <a href="/" className="nav_link">Home</a>
                            </li>
                            <li className="nav_item">
                                <a href="/" className="nav_link">Service</a>
                            </li>
                            <li className="nav_item">
                                <a href="/" className="nav_link">Contact</a>
                            </li>
                            <li className="nav_item">
                                <a href="/" className="nav_link">About</a>
                            </li>
                        </ul>
                    </div>
                </Toolbar>
                <></>
            </AppBar>
            <div className='App'>
                <div className="card">
                    <div className="heading">
                        <h3>{advice}</h3>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default App


// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// const App = () => {

//     const [advice, setAdvice] = useState('');

//     useEffect(() => {
//         axios.get('https://api.adviceslip.com/advice')
//             .then((response) => {
//                 setAdvice(response.data.slip.advice);

//             })
//     }, [])

//     return (
//         <div>
//             <h1>Function Based</h1>
//             <h3>{advice}</h3>
//         </div>
//     )
// }

// export default App;