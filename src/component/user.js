import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Navbar from './nav_bar.js'

export default function User_page(){
    const [User, SetUser] = useState();
    const [UserRegDate, SetUserRegDate] = useState();
    const [UserBirDate, SetUserBirDate] = useState();
    const UserUrl = "https://randomuser.me/api/";

    let DateArray;

    useEffect(() => {
        UserGet();
    }, []);
    
    var UserGet = async() => {
        await axios.get(UserUrl).then(resp => {
            SetUser(resp.data)
        });
    }

    return(
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:grid-rows-6">
            <Navbar SM="0"/>
                <div className="hidden lg:table-cell lg:col-span-6"></div>
                <div className="hidden lg:table-cell lg:col-span-4"></div>
                <div className="col-span-3 sm:mx-auto lg:col-span-2 z-50 lg:h-20">
                    <img className="rounded-full drop-shadow-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="300px" />
                </div>
                <div className="hidden lg:table-cell lg:col-span-6"></div>
                <div className="hidden lg:table-cell lg:col-span-6"></div>
                <div className="hidden lg:table-cell lg:col-span-6"></div>
                <div className="hidden lg:table-cell"></div>
                <div className="col-span-3 sm:mx-auto lg:col-span-2 z-50 drop-shadow-lg">
                    <form>
                        <div className="">
                            <table className="table-auto sm:bg-SpaceColor">
                                <thead>
                                    <tr>
                                        <td className="w-32"></td>
                                        <td className="w-40"></td>
                                        <td className="w-20"></td>
                                        <td className="w-40"></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2">Name</td>
                                        <td>
                                            <input className="disabled:bg-DisableColor disabled:opacity-50" type="text" name="name" value={
                                                User != null ? User.results[0].name.title + '. ' + User.results[0].name.first + ' ' + User.results[0].name.last : 'Loading...'
                                            }  disabled/>
                                        </td>
                                        <td className="text-center">Gender</td>
                                        <td>
                                            <input className="disabled:bg-DisableColor disabled:opacity-50 w-20 text-center" type="text" name="gender"  value={
                                                User != null ? User.results[0].gender : 'Loading...'
                                            } disabled/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  className="p-2">Location</td>
                                        <td colSpan="3">
                                            <input className="disabled:bg-DisableColor disabled:opacity-50 w-96" type="text" name="location"  value={
                                                User != null ? User.results[0].location.street.number + ' ' + User.results[0].location.street.name + ' ' + User.results[0].location.city : 'Loading...'
                                            } disabled/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td colSpan="3">
                                            <input className="disabled:bg-DisableColor disabled:opacity-50 w-96" type="text" name="location"  value={
                                                User != null ? User.results[0].location.state + ' ' + User.results[0].location.country + ' ' + User.results[0].location.postcode : 'Loading...'
                                            } disabled/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  className="p-2">E-mail</td>
                                        <td>
                                            <input className="disabled:bg-DisableColor disabled:opacity-50" type="text" name="mail"  value={
                                                User != null ? User.results[0].email : 'Loading...'
                                            } disabled/>
                                        </td>
                                        <td className="text-center"> Username </td>
                                        <td>
                                            <input className="disabled:bg-DisableColor disabled:opacity-50" type="text" name="username"  value={
                                                User != null ? User.results[0].login.username : 'Loading...'
                                            } disabled/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  className="p-2">Day of birth</td>
                                        <td>
                                            <input className="disabled:bg-DisableColor disabled:opacity-50 text-center" type="text" name="dob"  value={
                                                User != null ? User.results[0].dob.date.slice(8,10) + '/' + User.results[0].dob.date.slice(5,7) + '/' + User.results[0].dob.date.slice(0,4) : 'Loading...'
                                            } disabled/>
                                        </td>
                                        <td className="text-center">Age</td>
                                        <td>
                                            <input className="disabled:bg-DisableColor disabled:opacity-50 text-center w-20" type="text" name="age"  value={
                                                User != null ? User.results[0].dob.age : 'Loading...'
                                            } disabled/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>
                                            <input className="disabled:bg-DisableColor disabled:opacity-50" type="text" name="phone"  value={
                                                User != null ? User.results[0].phone : 'Loading...'
                                            } disabled/>
                                        </td>
                                        <td>Registered</td>
                                        <td>
                                            <input className="disabled:bg-DisableColor disabled:opacity-50 text-center" type="text" name="regisdate"  value={
                                                User != null ? User.results[0].registered.date.slice(8,10) + '/' + User.results[0].registered.date.slice(5,7) + '/' + User.results[0].registered.date.slice(0,4) : 'Loading...'
                                            } disabled/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            <Navbar SM="1"/>
        </div>
    )
}