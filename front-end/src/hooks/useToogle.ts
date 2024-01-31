import { useState } from "react";

export function useToogle (defaultValue: boolean) {
    
    const [state, setState] = useState(defaultValue)

    const toogle = () => {
        setState(v => !v)
    }

    return {
        value: state,
        toogle: toogle
    }

}