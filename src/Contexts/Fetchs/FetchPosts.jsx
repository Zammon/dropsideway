import AxiosFetch from "./AxiosFetch"

const FetchPost = async (setValue, setType, paramId) => {
    await AxiosFetch.get(`DropsidewayWebsite/Getpost/${paramId}`)
    .then(req =>{setValue(req); setType(req.data.type);} )
    .catch(err => console.log(err))
}

export default FetchPost