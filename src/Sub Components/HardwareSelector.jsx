import React from 'react'

function HardwareSelector() {
  return (
    <>
    <div>
        <label htmlFor="hardwareName">Hardware Name</label>
        <select name="hardwareName" id="">
            <option value="CPU">CPU</option>
            <option value="GPU">GPU</option>
            <option value="RAM">RAM</option>
            <option value="Motherboard">Motherboard</option>
        </select>
    </div>
      
    </>
  )
}

export default HardwareSelector
