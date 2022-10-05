import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchedFeed,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/video/:searchedTerm' element={<SearchedFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
