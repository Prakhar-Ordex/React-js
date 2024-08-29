import React, { useDeferredValue, useEffect, useMemo } from 'react'

const List = ({ input }) => {
    const deferredValue = useDeferredValue(input)
    const list = useMemo(() => {
        //useMemo  use to stop multiple time rendering 
        const a = [];
        for (let i = 0; i <= 10000; i++) {
            a.push(<div key={i}>{ deferredValue  + i }</div>);
        }
     
        return a; 
    }, [deferredValue])
    
    useEffect(() => {
        console.log(`'Rendering List input:${input} deferred:${deferredValue} `);
    })

    return list;
}


export default List
