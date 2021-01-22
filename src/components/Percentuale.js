import React, { useEffect, useState } from 'react'
import { api } from '../apis/apis.js'

export default function Percentuale() {
    const [vacciniPerRegione, setVacciniPerRegione] = useState([])


    useEffect(() => {
        fetch(api.vacciniTotalePercentuale)
            .then(info => info.json())
            .then(response => (setVacciniPerRegione(response.data)))

    }, [])


    let totaliSomministrazioni = 0;
    for (let i = 0; i < vacciniPerRegione.length; i++) {

        totaliSomministrazioni += vacciniPerRegione[i].dosi_somministrate

    }






    console.log(totaliSomministrazioni)




    return (
        <>
            <p>Il totale delle somministrazioni in italia è {totaliSomministrazioni} persone </p>
            <p> in percentuale {totaliSomministrazioni * 100 / 60000000} della popolazione italiana</p>
        </>
    )


}