import AxiosFetch from "./AxiosFetch";

const FetchListCard = async (setValue, pageIndex) =>{
    await AxiosFetch.get('DropsidewayWebsite/Getcardposts',{
        params: {
            pageIndex,
            pageSize: 8
        }
    }).then((req)=>{ 
        setValue(req.data);
    })
    .catch(err => console.log(err));
}

const PushFetchListCard = async (setValue, pageIndex) =>{
    await AxiosFetch.get('DropsidewayWebsite/Getcardposts',{
        params: {
            pageIndex,
            pageSize: 8
        }
    }).then((req)=>{ 
        setValue(prevCard => [...prevCard, ...req.data]);
    })
    .catch(err => console.log(err));
}

export default FetchListCard;
export { PushFetchListCard }