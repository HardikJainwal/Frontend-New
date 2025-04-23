import { getPdfBySections } from "../utils/apiservice";
import { useQuery } from '@tanstack/react-query'

export const useNoticesBySection = (section, archived = false, limit, page) => {
  return useQuery({
    queryKey: ["notices", section, archived, page, limit], 
    queryFn: () => getPdfBySections(section, archived, limit, page),
    enabled: !!section && !!limit && !!page, 
  });
};

