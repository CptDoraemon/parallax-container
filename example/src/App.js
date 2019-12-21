import * as React from 'react';
import ParallaxContainer from "parallax-container";
import './App.css';

function generateData() {
  const imageUrls = [];
  for (let i=1; i<=4; i++) {
    imageUrls.push({
      backgroundUrl: `https://xiaoxihome.s3.us-east-2.amazonaws.com/galleryphoto/canada/canada${i}.jpg`,
      title: `Section${i}`,
      text: `This is section ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt mollis velit quis maximus. Ut placerat est eu metus lacinia semper.`
    })
  }
  return imageUrls;
}

const data = generateData();

function ParallaxText(props) {
  return (
    <div className={'parallax-text'}>
      <h2>{ props.title }</h2>
      <p>
        { props.text }
      </p>
    </div>
  )
}


function Cover() {
  return (
    <div className={'cover'}>
      <p>COVER</p>
    </div>
  )
}

const payloads = data.map((obj, index) => <ParallaxText title={obj.title} text={obj.title} key={index}/>);

function App() {
  return (
    <div className={'app'}>
      <Cover />
      { data.map((i, index) => {
        return (
          <ParallaxContainer key={index} backgroundUrl={i.backgroundUrl}>
            { payloads[index] }
          </ParallaxContainer>
        )
      }) }
    </div>
  )
}

export default App;
