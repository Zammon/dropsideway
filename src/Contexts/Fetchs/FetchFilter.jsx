import AxiosFetch from "./AxiosFetch"

const FetchFilter = async ( setValue, area, category, type ) => {
    if(area!=="-" && category!=="-" && type!=="-"){
        await AxiosFetch.get(`DropsidewayWebsite/Getfiltersearch?area=${area}&typeitem=${category}&typepost=${type}`)
        .then(req => setValue(req))
        .catch(err => console.log(err))
    } else if (area!=="-" && category!=="-"){
        await AxiosFetch.get(`DropsidewayWebsite/Getfiltersearch?area=${area}&typeitem=${category}`)
        .then(req => setValue(req))
        .catch(err => console.log(err))
    } else if (area!=="-" && type!=="-"){
        await AxiosFetch.get(`DropsidewayWebsite/Getfiltersearch?area=${area}&typepost=${type}`)
        .then(req => setValue(req))
        .catch(err => console.log(err))
    } else if (category!=="-" && type!=="-"){
        await AxiosFetch.get(`DropsidewayWebsite/Getfiltersearch?typeitem=${category}&typepost=${type}`)
        .then(req => setValue(req))
        .catch(err => console.log(err))
    } else if (area!=="-"){
        await AxiosFetch.get(`DropsidewayWebsite/Getfiltersearch?area=${area}`)
        .then(req => setValue(req))
        .catch(err => console.log(err))
    } else if (category!=="-"){
        await AxiosFetch.get(`DropsidewayWebsite/Getfiltersearch?typeitem=${category}`)
        .then(req => setValue(req))
        .catch(err => console.log(err))
    } else if (type!=="-"){
        await AxiosFetch.get(`DropsidewayWebsite/Getfiltersearch?typepost=${type}`)
        .then(req => setValue(req))
        .catch(err => console.log(err))
    }
}

export default FetchFilter;