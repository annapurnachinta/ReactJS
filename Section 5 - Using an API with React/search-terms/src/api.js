import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zGQDDVZ5ahiEsiIDLtL3HLTD3_inKtDmBtEcuI-VIFI'
        },
        params: {
            query: term
        }
    })
    return response.data.results
}

export default searchImages