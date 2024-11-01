// src/index.js

import $axios from '@/plugins/axios'

/**
 * Fetches all users.
 *
 * @param {Object} params - Request parameters.
 * @param {number} params.page - The page number for the request.
 * @param {number} params.results - The number of results per page.
 * @returns {Promise<Object>} An object containing user data.
 * @throws {Error} If the request fails.
 */
const getAllUsers = (params) => $axios.get('/', { params })

export { getAllUsers }
