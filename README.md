# parallax-container

> A React component wrapper for parallax effect.

[![NPM](https://img.shields.io/npm/v/parallax-container.svg)](https://www.npmjs.com/package/@cptdoraemon/parallax-container) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
            <h2>Title</h2>
            <p>Contents</p>
        </div>
    )
}

interface AppProps {
    backgroundUrl: string
}

function App(props: AppProps) {
    return (
        <ParallaxContainer backgroundUrl={i.backgroundUrl}>
            <WrappedComponent />
        </ParallaxContainer>
    )
}
```

## Example
[Demo](https://cptdoraemon.github.io/parallax-container/)

## License

MIT © [CptDoraemon](https://github.com/CptDoraemon)
