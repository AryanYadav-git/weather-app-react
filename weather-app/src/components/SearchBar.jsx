import {useState} from "react";
import { Typography, InputAdornment, Button, TextField, IconButton } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { locationState } from "../store/atoms/location";
import { current } from "../store/atoms/current";
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import "./style.css"

function SearchBar() {
  const [location, setLocationState] = useRecoilState(locationState);
  const [loc, setLoc]=useState("");
  const setCurrent = useSetRecoilState(current);
  return (
    <div className="flex justify-between" id="header">
      <Typography variant="h1" fontSize={"1.6rem"} id="applicationName" className="flex justify-between items-center">
        Weather Application
      </Typography>
      <div className="searchbar flex gap-2" id="mainSearchBar">
        <IconButton variant="contained"
        title="Your location"
          onClick={() => {
            setCurrent(true);
          }}>
            <LocationOnTwoToneIcon />
          </IconButton>
        <TextField
          size="small"
          variant="outlined"
          label="Enter Location"
          //   InputProps={{
          //     startAdornment: (
          //       <InputAdornment position="start">
          //         <SearchRoundedIcon />
          //       </InputAdornment>
          //     ),
          //   }}
          onChange={(e) => {
            setLoc(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setLocationState(loc);
            // setClicked(true);
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
