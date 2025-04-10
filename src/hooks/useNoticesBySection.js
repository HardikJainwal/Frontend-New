import { getPdfBySections } from "../utils/apiservice";
import { useQuery } from '@tanstack/react-query'

export const useNoticesBySection = (section) => {
  return useQuery({
    queryKey: ["notices", section],
    queryFn: () => getPdfBySections(section),
    enabled: !!section,
  });
};
