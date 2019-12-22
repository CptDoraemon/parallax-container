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

## License

MIT © [CptDoraemon](https://github.com/CptDoraemon)
