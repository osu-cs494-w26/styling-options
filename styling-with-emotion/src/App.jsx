import { useState } from 'react'
import { css } from '@emotion/react'

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
    const styles = css`
        background-color: lavenderblush;
        color: mediumvioletred;
        margin: 0;
        padding: 12px;
    `

    return (
        <>
            <h1 css={styles}>What a boring app...</h1>
        </>
    )
}
