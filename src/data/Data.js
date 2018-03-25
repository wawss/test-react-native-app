import React from "react";
import md5 from "md5";

const apiPath = 'http://api.cakeland.com/v1/m/';

export function getProducts(cb) {
    fetch(apiPath + 'item/0?pageSize=170&type=蛋糕&ext=image,英文名称', {
        method: 'get',
        headers: {
            'app': 'm',
            'api-key': md5('m123456-2018-03-25 23') + ',' + md5('m123456-2018-03-26 00') + ',' + md5('m123456-2018-03-26 01')
        }
    }).then((response) => cb(response)).catch((error) => {
        console.error(error);
    });
}

export function getProductDetailByName(name, cb) {
    fetch(apiPath + '/item-detail/name/' + name, {
        method: 'get',
        headers: {
            'content-type': 'application/json',
            'app': 'm',
            'api-key':md5('m123456-2018-03-25 23') + ',' + md5('m123456-2018-03-26 00') + ',' + md5('m123456-2018-03-26 01')
        }
    }).then((response) => cb(response)).catch((error) => {
        console.error(error);
    });
}
