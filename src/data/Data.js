import React from "react";
import md5 from "md5";

const apiPath = 'http://api.cakeland.com/';
export function getProducts(cb) {
    fetch(apiPath + '/item/0?name=甜心米妮', {
        method: 'get',
        headers: {
            'app': 'm',
            'api-key': md5('m123456-2018-03-14 23')
        }
    }).then((response) => cb(response)).catch((error) => {
        console.error(error);
    });
}
