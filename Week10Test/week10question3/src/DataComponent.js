import React, { useState, useEffect } from "react";
import DataService from "./DataService";
function DataComponent(){
    const [datas, setData]=useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        DataService.getData().then((response) => {
            setData(response.data.data)
            console.log(response.data);
        });
    };
    return(
        <div>
            <h1>Data Table</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th> ID Nation</th>
                        <th> Population</th>
                        <th> Year</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map(
                            data =>
                                <tr key={data['ID Nation']}>
                                    <td>{data['ID Nation']}</td>
                                    <td>{data.Population}</td>
                                    <td>{data.Year}</td>
                                   
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataComponent;