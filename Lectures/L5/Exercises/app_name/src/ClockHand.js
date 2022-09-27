import { useState } from "react"

export default ClockHand() {  // naming convention: state, setState | first (state) is ... | setState is a function that 'sets' the state
    const [ degrees, setDegrees ] = useState(0)

    setInterval( , 1000)

    function advanceTime() { // possible in js to write prevState below differently
        setDegrees(prevState => prevState + 6) // what's in the parameter: the new state (degrees)
    }

    const style = {
        backgroundColor: "red",
        transform: "rotate(" + state + ")"
    }

    return (
        <div className="clock-hand" style={style}></div>
    )
}