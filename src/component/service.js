import * as React from 'react'
import Design1 from '../img/Design1.png'
import Req from '../img/requirement.png'
import Templ from '../img/layout.png'

export default function Service(props){
    const LG = {
        "s1" : "Service",
        "s1_001" : "Your design to Web",
        "s1_002_1" : "Design or Image",
        "s1_002_2" : "to",
        "s1_002_3" : "HTML/CSS or React",
        "s2_001" : "Your requirement to Web",
        "s2_002_1" : "Your requirement",
        "s2_002_2" : "to",
        "s2_002_3" : "HTML/CSS or React",
        "s3_001" : "Template to Web",
        "s3_002_1" : "Choice your template",
        "s3_002_2" : "to",
        "s3_002_3" : "HTML/CSS or React",
    }
    return(
        <div id="Service" className="grid grid-cols-3 mt-40 mb-96 px-60 gap-4 font-mono">
            <div className="font-bold text-4xl text-White drop-shadow-md col-span-3 mb-8">{props.LG.s1}</div>
            <div className="drop-shadow-lg bg-MainColor pb-16">
                <img src={Design1} className="w-1/6 mx-auto mt-16 mb-8"/>
                <div className="text-Main2Color font-bold text-center text-xl mb-8">{props.LG.s1_001}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s1_002_1}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s1_002_2}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s1_002_3}</div>
            </div>
            <div className="drop-shadow-lg border-2 border-MainColor pb-16">
                <img src={Req} className="w-1/6 mx-auto mt-16 mb-8"/>
                <div className="text-MainColor font-bold text-center text-xl mb-8">{props.LG.s2_001}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s2_002_1}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s2_002_2}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s2_002_3}</div>
            </div>
            <div className="drop-shadow-lg bg-MainColor pb-16">
                <img src={Templ} className="w-1/6 mx-auto mt-16 mb-8"/>
                <div className="text-Main2Color font-bold text-center text-xl mb-8">{props.LG.s3_001}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s3_002_1}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s3_002_2}</div>
                <div className="text-Gray font-semibold text-center text-lg">{props.LG.s3_002_3}</div>
            </div>
        </div>
    )
}