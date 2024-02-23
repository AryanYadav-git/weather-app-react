import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Coords } from './store/atoms/coords'
import { city } from './store/selectors/city'
import SearchBar from './components/SearchBar'
import Banner from './components/Banner'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

function App() {
  
  return (
    <RecoilRoot>
      <FetchData/>
      <Init/>
      <div className="h-screen w-screen bg-[#f8f8ff] py-10 px-14">
        <div className="h-full w-full flex flex-col gap-6">
          <SearchBar />
          <Banner></Banner>
        </div>
      </div>
    </RecoilRoot>
  );
}

function Init(){
  const setCoords = useSetRecoilState(Coords);
  const init = async () => {
    const location = await navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          isLoading: false,
          lon:position.coords.longitude,
          lat:position.coords.latitude
        });
        console.log(position);
      },
      (error) => {
        console.log(error);
        setCoords({
          isLoading: false,
          lon:72.8479,
          lat:19.0144
        });
      },
    );
  }
  init();
  return <div>
    
  </div>
}

function FetchData(){
  const cityState = useRecoilValue(city);
  return <div>{cityState}</div>
}

export default App
