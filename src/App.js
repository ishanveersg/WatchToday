import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from "./components/MovieDetails";


const App = () => {
  return (
    <Fragment>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Home />} />
          <Route path="/watchlist" element={<WatchList/>} />
          <Route path="/moviedetails" element={<MovieDetails/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
