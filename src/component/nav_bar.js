import React, {useEffect, useState } from 'react';
import {Link} from 'react-scroll'

export default function Nav_bar(props){
    const [nav_class, setnav_class] = useState(true);
    const [LGnow, SetLGnow] = useState(props.LGuse);

    useEffect(() => {
        const updatePosition = () => {
            if(window.pageYOffset > 50) {
                setnav_class(false);
            }
            else{
                setnav_class(true);
            }
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    const ChangeLG = () => {
        LGnow == "EN" ? SetLGnow('TH') : SetLGnow('EN');
        props.ChangeLG(LGnow)
    }
    // top-0 sticky
    return(
        <div id="nav" className={nav_class ? "pl-32 pr-32 grid grid-cols-12 font-mono pt-4 z-10 absolute top-0 right-0 left-0" : "pl-32 pr-32 grid grid-cols-12 font-mono pt-4 z-10 sticky top-0"}>
            <div className="col-span-8"></div>
            <div className="m-auto text-2xl z-10 text-White drop-shadow-md"><Link to="Home" smooth={true}>{props.LG.Home}</Link></div>
            <div className="m-auto text-2xl z-10 text-White drop-shadow-md"><Link to="About" smooth={true}>{props.LG.About}</Link></div>
            <div className="m-auto text-2xl z-10 text-White drop-shadow-md"><Link to="Service" smooth={true}>{props.LG.Services}</Link></div>
            <div className="m-auto text-2xl z-10 text-White drop-shadow-md" onClick={() => ChangeLG()}> {LGnow} </div>
        </div>
    )
}