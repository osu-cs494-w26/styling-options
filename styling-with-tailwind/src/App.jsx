import { useState } from 'react'

function Button(props) {
    const { children, ...rest } = props
    return <button {...rest}>{children}</button>
}

function PhotoCard(props) {
    const { url, caption, author } = props
    const [ isFaved, setIsFaved ] = useState(false)
    return (
        <div>
            <img src={url} alt={caption} />
            <div>
                <p>{caption}</p>
                <p>by {author}</p>
            </div>
            <button onClick={() => setIsFaved(prev => !prev)}>
                {isFaved ? "♥" : "♡"}
            </button>
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
