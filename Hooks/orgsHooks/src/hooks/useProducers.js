import { useState, useEffect } from 'react';

import { loadProducers } from '../services/loadData';


export default function useProducers() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {

        const loadedProducers = loadProducers();
        setTitle(loadedProducers.title);
        setList(loadedProducers.list);
    }, []);

    return [title, list];
}