
import React, {useState, useEffect} from 'react'
import { api } from '../apis/apis.js'


export default function Giorno() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(api.ultimoAggiornamento)
            .then(info => info.json())
            .then(response => setData(response.ultimo_aggiornamento))
 }, [])

    if (data!==undefined){
        let dataAggiornamento = new Date(data)
        var anno = dataAggiornamento.getFullYear();
        var giorno = dataAggiornamento.getDate();
        var mese = dataAggiornamento.getMonth() +1 ;

    }


    return (
        <>
            <p>I dati sono aggiornati al {giorno}/{mese} del {anno} </p>
        </>
    )
}