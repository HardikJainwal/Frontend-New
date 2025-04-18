import { getPdfBySections } from "../utils/apiservice";
import { useQuery } from '@tanstack/react-query'

export const useNoticesBySection = (section, archived = false) => {
  return useQuery({
    queryKey: ["notices", section, archived], 
    queryFn: () => getPdfBySections(section, archived),
    enabled: !!section, 
  });
};

