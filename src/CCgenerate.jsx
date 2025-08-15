
import Card from 'react-bootstrap/Card';
import { useState } from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import arrow from '/img/arrow.png';
import Contact from './Contact';
import { Landslide } from '@mui/icons-material';
export default function CCgenerate() {
    const [landsize, callLand] = useState(2000)
    const [climate, callClimate] = useState("")
    const [soil, callSoil] = useState("")
    const [tree, callTree] = useState(3200000)
    const [Co2, callCo2] = useState(81400)
    return (

        <div>
            <br>
            </br>
            <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   xl:grid-cols-3   gap-10 px-20 w-screen mx-auto">
                

                
                <div class="  backdrop-blur   ">


                    <div class="grid grid-rows-3 px-2 px-10 py-10 shadow-2xl border-double border-4 border-grey-900 ">
                        <div class=""><p class='text-centre px-14 text-white font-bold text-5xl' >User Revenue</p></div>


                        <table class="row-start-2 border-separate border-spacing-2 border border-slate-500 ...">
                            <thead>
                                <tr>
                                    <th class="border border-slate-600 text-centre text-white text-xl">Type</th>
                                    <th class="border border-slate-600 text-centre text-white text-xl">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td class="border border-slate-700 text-centre text-white font-bold text-xl">Number of trees planted</td>
                                    <td class="border border-slate-700 text-centre text-white font-bold text-xl">{tree}</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 text-centre text-white font-bold text-xl">CO2 Absorption in MtTon</td>
                                    <td class="border border-slate-700 text-centre text-white font-bold text-xl ">{Co2}</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 text-centre text-white font-bold text-xl">Carbon Credit Equivalent</td>
                                    <td class="border border-slate-700 text-centre text-white font-bold text-xl">{Co2}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>

            </div >
            <br></br>

            <Contact></Contact>
        </div >
    )
}