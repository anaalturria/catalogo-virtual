
import { useState } from "react";

function BoasVindas(props)
{
    const [ nome , setNome ] = useState('');
    return (
        <>
            <div>
                <input type="text" onChange={ (e) => { setNome( e.target.value ) } }/>
            </div> 
            <div>
                <span>{nome}</span>
            </div>
        </>
    )
}
export default BoasVindas;