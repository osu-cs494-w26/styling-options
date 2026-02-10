import { useState } from 'react'
import { css, Global } from '@emotion/react'

const textColor = "olivedrab"

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    html {
        font-family: "Roboto", sans-serif;
    }
    body {
        margin: 0;
    }
`

function Button(props) {
    const { children, secondary, ...rest } = props

    const styles = css`
        margin: 8px;
        color: ${secondary ? "royalblue" : "snow"};
        background-color: ${secondary ? "whitesmoke" : "royalblue"};
        border: 2px solid royalblue;
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: dodgerblue;
        }
    `
    return <button css={styles} {...rest}>{children}</button>
}

function PhotoCard(props) {
    const { url, caption, author } = props
    const [ isFaved, setIsFaved ] = useState(false)

    const styles = css`
        display: flex;
        gap: 8px;
        width: 256px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        img {
            width: 64px;
        }
        button {
            color: lightpink;
        }
    `

    return (
        <div css={styles}>
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
    const styles = css`
        background-color: lavenderblush;
        color: ${textColor};
        margin: 0;
        padding: 12px;

        @media (max-width: 640px) {
            font-size: 24px;
        }
    `

    return (
        <>
            <Global styles={globalStyles} />
            <h1 css={styles}>What a boring app...</h1>
            <Button>My button</Button>
            <Button secondary>My second button</Button>

            <PhotoCard
                url="https://picsum.photos/256"
                caption="My caption"
                author="Author" />
        </>
    )
}
