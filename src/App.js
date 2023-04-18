import logo from './logo.svg';
import './App.css';
import User from './Props/User';
import UseState from './UserStateHooks/UseState';
import ArrayData from './UserStateHooks/ArrayData';
import CountNumber from './useEffectHooks/CountNumber';
import FetchUserData from './useEffectHooks/FetchUserData';
import SearchData from './useEffectHooks/SearchData';
import AxiosFetchUserData from './Axios/AxiosFetchUserData';
import ContexRouting from './useContexHooks/ContexRouting';

function App() {
  return (
  <>
    {/* <User name="Pritam" email="pritam@gmail.com"/> */}
    {/* <User/> */}
    {/* <UseState/> */}
    {/* <ArrayData/> */}
    {/* <CountNumber/> */}
    {/* <FetchUserData/> */}
    {/* <SearchData/> */}
    {/* <AxiosFetchUserData/> */}

    <ContexRouting/>

  </>
  );
}

export default App;
