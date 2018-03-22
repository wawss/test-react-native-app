import React from "react";
import md5 from "md5";

const apiPath = 'http://api.cakeland.com/v1/m/';

export function getProducts(cb) {
    fetch(apiPath + 'item/0?pageSize=170&type=蛋糕&ext=image,英文名称',{
        method: 'get',
        headers: {
            'app': 'm',
            'api-key': md5('m123456-2018-03-22 22') + ',' + md5('m123456-2018-03-22 23') + ',' + md5('m123456-2018-03-22 00')
        }
    }).then((response) => cb(response)).catch((error) => {
        console.error(error);
    });
}
