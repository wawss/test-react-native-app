import React from "react";
import md5 from "md5";

const apiPath = 'http://api.cakeland.com/v1/m/';

export function getProducts(cb) {
    fetch(apiPath + 'item/0?pageSize=170&type=蛋糕&ext=image,english',{
        method: 'get',
        headers: {
            'app': 'm',
            'api-key': md5('m123456-2018-03-21 22') + ',' + md5('m123456-2018-03-21 23') + ',' + md5('m123456-2018-03-21 00')
        }
    }).then((response) => cb(response)).catch((error) => {
        console.error(error);
    });
}
