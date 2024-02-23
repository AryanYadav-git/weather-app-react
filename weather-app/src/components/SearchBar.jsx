import {useState} from "react";
import { Typography, InputAdornment, Button, TextField } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { locationState } from "../store/atoms/location";

function SearchBar() {
  const [location, setLocationState] = useRecoilState(locationState);
  const [loc, setLoc]=useState("");
  return (
    <div className="flex justify-between">
      <Typography variant="h1" fontSize={"1.6rem"} className="flex justify-between items-center">
        Weather Application
      </Typography>
      <div className="searchbar flex gap-2">
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
            console.log(e.target.value);
            // console.log(locationState.location);
            // setClicked(null);
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
