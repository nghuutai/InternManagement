// import _ from 'lodash';
import { API } from '../common/app.routes';

export function getApiPath(route, email, params) {
    return getPath(route, params, API, email);
}

export function getUrlPath(route, params) {
    return getPath(route, params, URL);
}

/**
 * pathsCollection: URL or API. See core/common/app.routes.js for details
 */
function getPathTemplate(route, pathsCollection, email) {
    if (route.parent) {
        let path = getPathTemplate(pathsCollection[route.parent], pathsCollection) + '/' + route.path;
        return path + email;
    }
    return route.path + email;
}

/**
 * pathsCollection: URL or API. See core/common/app.routes.js for details
 */
function getPath(route, params, pathsCollection, email) {
    let path = getPathTemplate(route, pathsCollection, email);
    let queryArray = [];
    let routeParams = [];

    const rParams = path.match(/:\w+/g);
    if (rParams) {
        rParams.forEach(function (param) {
            routeParams.push(param.substring(1));
        });
    }

    if (params) {
        Object.keys(params).forEach(function (key) {
            if (routeParams.indexOf(key) > -1) {
                path = path.replace(':' + key, params[key]);
            } else {
                queryArray.push(key + '=' + params[key]);
            }
        });
        path += (queryArray.length ? '?' + queryArray.join('&') : '');
    }

    return path;
}