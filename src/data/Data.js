import React from "react";
import md5 from "md5";
import moment from 'moment';

const apiPath = 'http://api.cakeland.com/v1/m/';

export function getProducts(cb) {
    fetch(apiPath + 'item/0?pageSize=170&type=蛋糕&ext=image,英文名称', {
        method: 'get',
        headers: {
            'app': 'm',
            'api-key': md5('m123456-' + moment().subtract(1, 'hours').format('YYYY-MM-DD HH')) + ',' + md5('m123456-'+moment().format('YYYY-MM-DD HH')) + ',' + md5('m123456-'+moment().add(1, 'hours').format('YYYY-MM-DD HH'))
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
            'api-key': md5('m123456-' + moment().subtract(1, 'hours').format('YYYY-MM-DD HH')) + ',' + md5('m123456-'+moment().format('YYYY-MM-DD HH')) + ',' + md5('m123456-'+moment().add(1, 'hours').format('YYYY-MM-DD HH'))
        }
    }).then((response) => cb(response)).catch((error) => {
        console.error(error);
    });
}
