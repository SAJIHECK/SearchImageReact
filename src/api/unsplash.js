import axios from "axios";


export default axios.create({
baseURL: 'https://api.unsplash.com',
headers: {
    Authorization: 'Client-ID 2i2MPfFhZHDccRGtJY73yiEtBqoG0uO6W5svug6epAk' 
}
});