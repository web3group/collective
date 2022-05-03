import { Fragment } from 'react';
import Collection from './components/Collection';
import HeaderCont from './components/HeaderCont';
import Hero from './components/Hero';
import MainCont from './components/MainCont';

function App() {
  return (
    <Fragment>
      <div className="bg__wrapper">
        <HeaderCont />
        <Hero />
        <Collection />
      </div>
      <MainCont />
    </Fragment>
  );
}

export default App;
