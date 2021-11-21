import axios from "axios";

const FAMILY_PERSON_API_BASE_URL ="http://localhost:8080/api/v1";

class PersonService{

    getPersonList(){
        return axios.get(FAMILY_PERSON_API_BASE_URL+ '/personlist');
    }

    getPersonById(personId){
        return axios.get(FAMILY_PERSON_API_BASE_URL + '/person/' + personId);
    }

    updatePerson(person, personId){
        return axios.put(FAMILY_PERSON_API_BASE_URL + '/updatePerson/' + personId, person);
    }

    deletePerson(personId){
        return axios.delete(FAMILY_PERSON_API_BASE_URL + '/deletePerson/' + personId);
    }

}

export default new PersonService()