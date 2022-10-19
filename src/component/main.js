import * as React from 'react'
import img_pro from '../img/301418479_5457493281000002_4545961415524115644_n.jpg'

export default function main(props){
    return (
        <div className="grid grid-cols-2 gap-0">
            <div className="m-auto text-White font-mono px-24">
                <div className="text-6xl font-bold drop-shadow-md">{props.LG.t1_001}</div>
                <div className="text-5xl font-bold drop-shadow-md">{props.LG.t1_002}</div>
                <div className="text-lg mt-4 text-Gray drop-shadow-md">{props.LG.t1_003}</div>
            </div>
            <div className="w-full h-screen bg-no-repeat bg-right" style={{backgroundImage: `url(${img_pro})`}}>
            </div>
            <div id="About" className="w-full h-screen bg-no-repeat bg-right" style={{backgroundImage: `url(${img_pro})`}}>
            </div>
            <div className="m-auto text-White font-mono px-24">
                <div className="text-6xl font-bold drop-shadow-md">{props.LG.t1_004}</div>
            </div>
        </div>
    )
}