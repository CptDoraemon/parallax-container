# parallax-container

> A React component wrapper for parallax effect.

## Install

```bash
npm install --save @cptdoraemon/parallax-container
```

## Usage

```tsx
import * as React from 'react'
import ParallaxContainer from "parallax-container"

function WrappedComponent() {
    return (
        <div>
            <h1>Title</h1>
            <p>Contents</p>
        </div>
    )
}

interface AppProps {
    backgroundUrl: string
}

function App(props: AppProps) {
    return (
        <ParallaxContainer backgroundUrl={props.backgroundUrl}>
            <WrappedComponent />
        </ParallaxContainer>
    )
}
```

## Example
[Demo](https://cptdoraemon.github.io/parallax-container/)

## Notes 1
```html
<div className='container' style={{position: 'fixed'}}>
    <div className='background' style={{position: 'absolute'}}> </div>
    <div className='texts' style={{position: 'relative'}}> </div>
</div>
<div className='placehoder' style={{position: 'relative'}}> </div>
```

The placeholder gives the percentage of this section is viewed: when the top edge of this section is at the bottom of the viewport, percentage is 0%; when the bottom edge of this section is at the top of the viewport, percentage is 100%;

Then the fixed container is offset by css top property to mimic position: 'relative' behavior, the absolute texts are offset by top property as well however by a different value to scroll slower (or faster) relative to the container to achieve parallax effect.

The page can be scrolled much smoother in this way.

## Notes 2
```html
<div className='container' style={{position: 'relative'}}>
    <div className='background' style={{position: 'absolute'}}> </div>
    <div className='texts' style={{position: 'relative'}}> </div>
</div>
```

This would work as well, but the images would be jumpy (refreshed slow) when scrolling.

## License

MIT © [CptDoraemon](https://github.com/CptDoraemon)
