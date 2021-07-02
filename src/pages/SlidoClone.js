import React, {useEffect, useState} from 'react';
import axios from "../components/axios/Axios";
import Header from "../components/header/Header";

const SlidoClone = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/events').then(response => {
            console.log(response)
            setData(response.data)
        });
    }, [])

    return (
        <>
            <Header/>
            <div className="md:container md:mx-auto">
                <div className={'w-full'}>
                    <h1>Slido Clone</h1>
                </div>
                <div className={'w-full'}>
                    {data.map((tile) => (
                        <div>
                            <div>
                                <div>
                                    Event {tile.uid}
                                </div>
                                <div>
                                    {tile.title}
                                </div>
                                <div>
                                    {tile.description}
                                </div>
                                <div>
                                    Start at {tile.start_at}
                                    <br/>
                                    End at {tile.end_at}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default SlidoClone;
