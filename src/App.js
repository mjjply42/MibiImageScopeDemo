import React, { useState } from 'react';
import { SliderComponent } from './components/logic/slidersLogic';
import { ImageComponent } from './components/logic/imageLogic'
import './App.css';

function App() {

  const [passValue, updateScaleValue] = useState()
  const scaleUpdate = (scale, value) => {
    updateScaleValue([scale, value])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.mainContainer} class="grid-container">
          <ImageComponent scaleUpdate={passValue} style={styles.imageGrid} class="grid-item">1</ImageComponent>
          <SliderComponent  scaleUpdate={scaleUpdate} style={styles.sliderGrid} class="grid-item">2</SliderComponent>
        </div>
      </header>
    </div>
  );
}

const styles = {
  mainContainer: {
    gridGap: '0px 10px',
    display: 'grid',
    gridTemplateColumns: 'auto 500px',
    gridTemplateRows: 'auto',
    width: '90%',
    height: ((window.innerHeight) * .9),
    gridTemplateAreas:` 
        'photo sliders'`,
  },
  imageGrid: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    gridArea: 'photo',
  },
  sliderGrid: {
    backgroundColor: 'purple',
    width: '100%',
    height: '100%',
    gridArea: 'sliders',
  }
}

export default App;
