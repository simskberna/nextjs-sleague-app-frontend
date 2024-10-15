import useSWR from 'swr';
import { _get } from '@/app/api/service';
import { AxiosResponse } from 'axios';

type Row = {
  match_date: string;
  home_team_name: string;
  away_team_name: string;
  venue: string;
};

const useFetchUpcomingMatches = () => {
  const { data, error, isLoading } = useSWR<Row[]>('/matches?upcoming=true', async (url: string): Promise<Row[]> => {
    const response: AxiosResponse<Row[]> = await _get<Row[]>(url);
    return response.data;
  });

  return {
    upcomingMatches: data,
    error,
    isLoading,
  };
};

export default useFetchUpcomingMatches;
