import { useState } from 'react'

function Button(props) {
    const { children, ...rest } = props
    return <button {...rest}>{children}</button>
}

function PhotoCard(props) {
    const { url, caption } = props
    const [ isFaved, setIsFaved ] = useState(false)
    return (
        <div>
            <div>
                <img src={url} alt={caption} />
            </div>
            <div>
                <p>{caption}</p>
                <Button onClick={() => setIsFaved(prev => !prev)}>
                    {isFaved ? "♥" : "♡"}
                </Button>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <>
            <h1>What a boring app...</h1>
        </>
    )
}
