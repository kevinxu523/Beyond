import React, { useState } from 'react'
const seats =[
    'seat1',
    'seat2',
    'seat3',
    'seat4',
    'seat5'
]
export default function Seat(props) {
    const [seletctedSeat,setSelectedSeat] = useState(0)
    const stepChange = stp =>{
        props.nextStep(stp)
    }
    // const SeatsList = ()=>{
    //     seats.map(seat=>{
    //         return 
    //             <div>{seat}</div>
            
    //     })
    // }
    const selectASeat = sea =>{
        setSelectedSeat(sea)
    }
    return (
        <div>
            <div>
                {/* <SeatsList/> */}
                <label id="seat">Select seat  </label>
                <div className='seatbench'>
                {
                  seats.map(seat=>{
                      return   <div className={seletctedSeat == seat ? 'seat seta-selected':'seat' } onClick={()=>selectASeat(seat)}>
                            {seat}
                      </div>
                  })
              }
                </div>
            </div>
               <div className="footer">
                    <button onClick={()=>stepChange(props.id)} >
                        Next
                    </button>
            </div>
        </div>
    )
}
