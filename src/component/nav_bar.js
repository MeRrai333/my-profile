import * as React from 'react'
import {Link } from "react-router-dom";

export default function nav_bar(SM){
    var ClassMain = '';
    if(SM.SM == "0"){
        ClassMain += 'hidden lg:table-cell lg:col-span-6 z-50';
    }
    else{
        ClassMain += 'lg:hidden col-span-3 z-50';
    }
    return(
        <div className={ClassMain}>
            <div className="grid z-50">
                <div className="text-center mt-3">
                    <Link to="/">
                        <button className="p-2 rounded-lg bg-MainColor hover:bg-HoverColor drop-shadow-lg">Home</button>
                    </Link>
                </div>
                <div className="text-center mt-3 sm:mb-3">
                    <Link to="/cat">
                        <button className="p-2 rounded-lg bg-MainColor hover:bg-HoverColor drop-shadow-lg">Random Cat Images</button>
                    </Link>
                </div>
                <div className="text-center mt-3 sm:mb-3">
                    <Link to="/user">
                        <button className="p-2 rounded-lg bg-MainColor hover:bg-HoverColor drop-shadow-lg">Random User</button>
                    </Link>
                </div>
                <div className="hidden lg:table-cell lg:col-span-6"></div>
            </div>
        </div>
    )
}