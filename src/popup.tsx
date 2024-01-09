import { Button } from 'primereact/button'
import { useState } from "react"


import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/saga-purple/theme.css';
import './style.css'

function IndexPopup() {
  return (
    <div className="p-2 w-[300px]">
      <Button className='w-[50px] ' severity='danger'> 555 </Button>
    </div>
  )
}

export default IndexPopup
