import {useState} from 'react';

const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return {form, handleChange};
}

export default useForm;
