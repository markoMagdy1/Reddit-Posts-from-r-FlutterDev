
import axios from 'axios';

const BASE_URL = 'https://www.reddit.com';

export const fetchRedditPosts = async (category, after ) => {
    try {
        const response = await axios.get(`${BASE_URL}/r/FlutterDev/${category}.json?limit=10&after=${after}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching Reddit posts:', error);
        throw error;
    }
};
