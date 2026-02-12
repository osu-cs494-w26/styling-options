import { useState } from 'react'

function Button(props) {
    const { children, secondary, ...rest } = props
    const colors = secondary
        ? "bg-gray-500 hover:bg-gray-700 focus:outline-gray-700 focus:bg-gray-700"
        : "bg-sky-500 hover:bg-sky-700 focus:outline-sky-700 focus:bg-sky-700"
    return <button className={`px-5 py-2 rounded-full text-sm font-semibold text-white focus:outline-3 focus:outline-offset-2 ${colors}`} {...rest}>{children}</button>
}

function PhotoCard(props) {
    const { url, caption, author } = props
    const [ isFaved, setIsFaved ] = useState(false)
    return (
        <div className="w-2xs m-2 rounded-lg shadow-sm grid grid-cols-4 gap-2 overflow-hidden">
            <img className="w-full" src={url} alt={caption} />
            <div className="col-span-2 flex flex-col justify-center font-light overflow-hidden">
                <p className="text-xl text-gray-700 truncate">{caption}</p>
                <p className="pl-0.5 text-xs text-gray-500 truncate">by {author}</p>
            </div>
            <button className="font-extralight text-4xl text-rose-300 cursor-pointer" onClick={() => setIsFaved(prev => !prev)}>
                {isFaved ? "♥" : "♡"}
            </button>
        </div>
    )
}

export default function App() {
    return (
        <>
            <h1 className="p-4 text-violet-400 bg-pink-200">What a boring app...</h1>
            <PhotoCard url="https://picsum.photos/512" caption="My photo asdf asdf asdfasdf asdfasdf" author="Rob Hess asdfasdfasdfa asdfasdfasdf" />
            <div className="m-2 grid gap-2 grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
                <Button>Button 1</Button>
                <Button secondary>Button 2</Button>
                <Button>Button 3</Button>
                <Button secondary>Button 4</Button>
                <Button secondary>Button 5</Button>
                <Button>Button 6</Button>
                <Button>Button 7</Button>
                <Button>Button 8</Button>
                <Button>Button 9</Button>
                <Button>Button 10</Button>
            </div>
        </>
    )
}
