import { useQuery } from "@tanstack/react-query";
import { getPdfByParams } from "../utils/apiservice"; 
import { QUERY_KEYS } from "../utils/queryKeys";

const usePdfContent = (category) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PDFS_BY_CATEGORY, category],
    queryFn: async () => {
      const data = await getPdfByParams(category);
      return data || []; 
    },
  });
};

export default usePdfContent;
