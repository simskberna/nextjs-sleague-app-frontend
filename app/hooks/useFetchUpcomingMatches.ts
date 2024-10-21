import useSWR from 'swr';
import { _get } from '@/app/api/service';
import { AxiosResponse } from 'axios';

type Row = {
  match_date: string;
  home_team_name: string;
  away_team_name: string;
  venue: string;
};

interface TableResponse {
  content: Row[];
}
const useFetchUpcomingMatches = (page:number=0, size:number = 10) => {
  const { data, error, isLoading } = useSWR<TableResponse>(`/matches?page=${page}&size=${size}`, async (url: string): Promise<TableResponse> => {
    const response: AxiosResponse<TableResponse> = await _get<TableResponse>(url);
    return response.data;
  });

  return {
    upcomingMatches: data?.content,
    error,
    isLoading,
  };
};

export default useFetchUpcomingMatches;
