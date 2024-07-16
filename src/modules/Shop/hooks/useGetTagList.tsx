import { useQuery } from "@tanstack/react-query";
import { getTagListService } from "../shop.service";

const useGetTagList = (limit?: number, skip?: number, select?: string) => {
  const {
    data: tagList,
    isLoading: getTagsIsLoading,
    isError: getTagsIsError,
  } = useQuery({
    queryKey: ["tag-list"],
    queryFn: () => getTagListService(limit, skip, select),
  });

  return { tagList, getTagsIsLoading, getTagsIsError };
};

export default useGetTagList;
