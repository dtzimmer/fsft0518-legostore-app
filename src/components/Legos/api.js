
/**
 * Makes a fetch request with a body
 *
 * @param {String} uri
 * @param {String} method
 * @param {Object|Array} [body]
 *
 * @returns {Promise<Response>}
 */
const requestWithBody = async (uri, method, body) =>
    await fetch(uri, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())


/**
 * Post
 *
 * @param uri
 * @param body
 * @returns {Promise<Response>}
 */
const post = async (uri, body = {}) =>
    await requestWithBody(uri, 'POST', body)
        .then(response => response.json())



/**
 * PUT
 *
 * @param uri
 * @param body
 * @returns {Promise<Response>}
 */
const put = async (uri, body = {}) =>
    await fetch(uri, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(body), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())


const del = async uri =>
    await requestWithBody(uri, 'DELETE')
        .then(response => response.json())










export const createCharacter = async data =>
    await post(`http://localhost:3000`, data)
        .then(response => response.json())


export const getLegos = async () => {
    const response = await fetch('http://localhost:3000', {mode: 'cors'})
    return await response.json()
}

export const createAndGetAll = async data => {
    await createCharacter(data)
    return await getLegos()
}