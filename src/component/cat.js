import React, {useState, useEffect} from 'react'
import axios from 'axios';
import NavBar from './nav_bar.js'

export default function Cat_page(){
    const [CatImg1, SetCatImg1] = useState([]);
    const [CatFact, SetCatFact] = useState();
    const CatUrl = "https://api.thecatapi.com/v1/images/search?format=json&limit=6";
    const CatFactUrl = "https://catfact.ninja/fact";

    useEffect(() => {
        CatGet();
        CatFactGet();
    }, []);

    var CatGet = async() => {
        await axios.get(CatUrl).then(resp => {
            SetCatImg1(resp.data)
        });
    }
    var CatFactGet = async() => {
        await axios.get(CatFactUrl).then(resp => {
            SetCatFact(resp.data)
        });
    }

    return(
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:grid-rows-6">
            <NavBar SM="0"/>
            <div className="col-span-3 lg:col-span-6 z-50 text-center">
                <button className="p-4 rounded-lg bg-MainColor hover:bg-HoverColor drop-shadow-lg" onClick={(e) => CatGet()}>Random</button>
                <div className="text-sm mt-1">Cat Fact! : {CatFact != null ? CatFact.fact : ''}</div>
            </div>
            <div className="hidden lg:table-cell lg:col-span-6"></div>
            <div className="z-50 col-span-3 lg:col-span-2 mx-auto max-w-md lg:h-20">
                <img  src={CatImg1.length != 0 ? CatImg1[0].url : ''} className="max-h-60 drop-shadow-xl" width="100%"/>
            </div>
            <div className="z-50 col-span-3 lg:col-span-2 mx-auto max-w-md lg:h-20">
                <img  src={CatImg1.length != 0 ? CatImg1[1].url : ''} className="max-h-60 drop-shadow-xl" width="100%"/>
            </div>
            <div className="z-50 col-span-3 lg:col-span-2 mx-auto max-w-md lg:h-20">
                <img  src={CatImg1.length != 0 ? CatImg1[2].url : ''} className="max-h-60 drop-shadow-xl" width="100%"/>
            </div>
            <div className="lg:row-span-3 lg:col-span-6"></div>
            <div className="z-50 col-span-3 lg:col-span-2 mx-auto max-w-md lg:h-20">
                <img  src={CatImg1.length != 0 ? CatImg1[3].url : ''} className="max-h-60 drop-shadow-xl" width="100%"/>
            </div>
            <div className="z-50 col-span-3 lg:col-span-2 mx-auto max-w-md lg:h-20">
                <img  src={CatImg1.length != 0 ? CatImg1[4].url : ''} className="max-h-60 drop-shadow-xl" width="100%"/>
            </div>
            <div className="z-50 col-span-3 lg:col-span-2 mx-auto max-w-md lg:h-20">
                <img  src={CatImg1.length != 0 ? CatImg1[5].url : ''} className="max-h-60 drop-shadow-xl" width="100%"/>
            </div>
            <NavBar SM="1"/>
        </div>
    )
}