import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Table.css'
import axios from "axios";
import moment from 'moment'



function PendingReservationTableList({ reservation, fetch }) {

    const [name, setName] = useState('')
    const [expoToken, setExpoToken] = useState('')


    const findCustomerName = async () => {
        try {

            const { data } = await axios.get(`http://localhost:3000/api/customers/${reservation.customerId}`)
            setName(data.fullname)
            setExpoToken(data.expoToken)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    const acceptReservation = async () => {
        try {

            await axios.put(`http://localhost:3000/api/reservations/approve/${reservation.id}/${expoToken}`)

            fetch()
        }
        catch (error) {
            console.log(error)
        }

    }

    const declineReservation = async () => {
        try {

            await axios.put(`http://localhost:3000/api/reservations/reject/${reservation.id}/${expoToken}`)
            fetch()

        }
        catch (error) {
            console.log(error)
        }

    }



    useEffect(() => {
        findCustomerName()
    }, [])



    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{moment(reservation.date).calendar()}</td>
                <td>{moment(reservation.time).utcOffset('-000').format('LT')}</td>
                <td>{reservation.guest_number}</td>
                <td className="buttons">
                    <button className="accept" onClick={acceptReservation}>Accept</button>
                    <button className="decline" onClick={declineReservation}>Decline</button>
                </td>
            </tr>
        </tbody>

    );
}

export default PendingReservationTableList




