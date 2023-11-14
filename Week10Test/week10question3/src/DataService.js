import axios from "axios";

class DataService{

    getData(){
        return axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    }
}
export default new DataService();