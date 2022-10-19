import React, {useEffect, useState} from 'react';
import './App.css';
import Nav_bar from './component/nav_bar.js';
import Main from './component/main.js'
import Service from './component/service.js'
import urlLG from './component/lg.json';

export default function App() {
    const [LG, SetLG] = useState('EN');
    const [DataLG, SetDataLG] = useState(urlLG.EN)

    const Change = (data) => {
      data == 'TH' ? SetDataLG(urlLG.EN) : SetDataLG(urlLG.TH)
      SetLG(data)
    }

    return (
      <div id="Home">
        <Nav_bar LG={DataLG.nav} LGuse={LG} ChangeLG={CLG => Change(CLG)}/>
        <Main LG={DataLG.t1}/>
        <Service LG={DataLG.t2}/>
      </div>
    )
}