import { useState } from "react";
import axios from "axios";

export const useRate = () => {

    const [apiData, setApiData] = useState();

    const downloadData = async () => {
        try {
            const response = await axios.get(`https://open.er-api.com/v6/latest/EUR`)
                .then(response => console.log(response.data));
            const data = response.json();
            console.log({responseData: data})

            setApiData({
                data
            });

        } catch (error) {
            setApiData({
                result: "error"
            });
        };
    };

    console.error({downloadData: downloadData});
    return ([apiData, downloadData])
};