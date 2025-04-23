import { getPdfBySections } from "../utils/apiservice";
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../utils/queryKeys';

export const useNoticesBySection = (section, archived = false, limit, page) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_NOTICES, section, archived, page, limit],
    queryFn: () => getPdfBySections(section, archived, limit, page),
    enabled: !!section && !!limit && !!page,
  });
};

