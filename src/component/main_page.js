import * as React from 'react';
import NavBar from './nav_bar.js'

export default function main_page(){
   return(
    <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:grid-rows-4">
        <NavBar SM="0"/>

        <div></div>
        <div className="z-50 sm:text-center lg:text-left">
            <h1 className="text-2xl font-bold">MAX METHIT</h1> 
            <h2 className="text-base ">Hi, I’m Max I study in Computer engineer and interest in Backend developer, Data engineer and ML engineer</h2>
        </div>
        <div className="lg:col-span-1"></div>
        <div className="z-50 sm:ml-10 sm:col-span-3 sm:row-sapn-3 lg:col-span-2 lg:row-span-2 drop-shadow-lg">
            <img className="mx-auto" src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/301418479_5457493281000002_4545961415524115644_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_eui2=AeHYhXYaEl3SEAYWRaNvHxnVdpQ7f44dNkB2lDt_jh02QGcqDsZxlhNoDEaYN5OTGhr3kiMdtRlz9ysGczGX-5O6&_nc_ohc=JPrTFVozV-sAX_h7Sea&_nc_zt=23&_nc_ht=scontent.fbkk2-8.fna&oh=00_AT897cBMTySOPzjVRkYFWYat0wVazGWpCIEUJGInlSrCSg&oe=63244F6C" width="75%" />
        </div>
        <div className="hidden lg:table-cell"></div>

        <div className="z-50 text-center mt-4">
            <img className="mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" width="50%"/>
            <h1 className="text-xl">Beginer</h1>
        </div>
        <div className="z-50 text-center mt-8">
            <img className="mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" width="50%"/>
            <h1 className="text-xl">Beginer</h1>
        </div>
        <div className="z-50 text-center mt-8">
            <img className="mx-auto" src="https://seeklogo.com/images/A/arduino-logo-BC7CBC1DAA-seeklogo.com.png" width="50%"/>
            <h1 className="text-xl">Intermediate </h1>
        </div>
        <div className="hidden lg:table-cell"></div>

        <div className="z-50 text-center mt-8">
            <img className="mx-auto" src="https://miro.medium.com/max/1400/1*gcG_duCl1v0SP6fyVbv67Q.png" width="50%"/>
            <h1 className="text-xl">Beginer</h1>
        </div>
        <div className="z-50 text-center mt-8">
            <img className="mx-auto" src="https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2826/2018/12/1_6kK9j74vyOmXYm1gN6ARhQ.png" width="30%"/>
            <h1 className="text-xl">Beginer</h1>
        </div>
        <div className="z-50 text-center mt-8">
            <img className="mx-auto" src="https://zixzax.net/wp-content/uploads/2020/05/MySQL-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.png" width="40%"/>
            <h1 className="text-xl">Beginer</h1>
        </div>

        <NavBar SM="1"/>
    </div>
   )
}