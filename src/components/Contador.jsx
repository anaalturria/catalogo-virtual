
import { useState } from "react";

function Contador(props)
{
    const [ contador , setContador ] = useState(0);

    function Aumento() 
    {
        setContador( contador + 1 );
    }
    function Diminuir() 
    {
        setContador( contador - 1 );
    }

    return (
        <>
            <button onClick={Aumento}>+</button>
            <span>{contador}</span>
            <button onClick={Diminuir}>-</button>
        </>
    )
}
export default Contador;