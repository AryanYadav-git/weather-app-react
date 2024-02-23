import {useState} from "react";
import { Typography, InputAdornment, Button, TextField } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { locationState } from "../store/atoms/location";

function SearchBar() {
  const setLocation = useSetRecoilState(locationState);
  const [location, setLocationState] = useState("");
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
            setLocationState(e.target.value);
            console.log(e.target.value);
            // console.log(locationState.location);
            // setClicked(null);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setLocation(location);
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
