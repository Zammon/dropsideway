import AxiosFetch from "./AxiosFetch";

const FetchSearch = async (setValue, search, pageIndex) => {
    await AxiosFetch.get("DropsidewayWebsite/Getsearchs", {
        params: {
          search: search,
          pageIndex,
          pageSize: 20,
        },
      })
      .then((req) => {
        if (!req?.data) return;
        setValue({
          lengthTitle: req.data.lengthTitle,
          lengthTag: req.data.lengthTag,
          lengthArea: req.data.lengthArea,
          titlePosts: [...req.data.titlePost],
          tagPosts: [...req.data.tagPosts],
          areaPosts: [...req.data.areaPost],
        });
      })
      .catch((error) => console.log(error));
};

export default FetchSearch;