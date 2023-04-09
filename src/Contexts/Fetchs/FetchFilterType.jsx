import AxiosFetch from "./AxiosFetch";

const FetchFindFilter = async (filterName, setValue) => {
    await AxiosFetch.get(`DropsidewayWebsite/Findtype/${filterName}`)
    .then(req => setValue(req))
    .catch(err => console.log(err))
}

export default FetchFindFilter