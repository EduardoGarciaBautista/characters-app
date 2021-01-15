import {useEffect, useState} from 'react';


const useDebounce = (value, delay) => {

    const [valueWithTime, setValueWithTime] = useState(value);


    useEffect(() => {
        const timer = setTimeout(() => {
            setValueWithTime(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        }
    }, [value]);

    return valueWithTime;
};

export default useDebounce;
