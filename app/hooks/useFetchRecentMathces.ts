import useSWR from 'swr';
import { _get } from '@/app/api/service';
import { AxiosResponse } from 'axios';

interface Match {
  id: number;
  home_team_id: number;
  away_team_id: number;
  match_date: string;
  score: string | null;
  status: string;
  venue: string;
  away_team_name: string;
  league: string | 'LaLiga';
  home_team_name: string;
  away_team_img: string;
  home_team_img: string;
}

const useFetchRecentMatches = () => {
  const { data, error, isLoading } = useSWR<Match[]>('/matches?recent=true', async (url: string): Promise<Match[]> => {
    const response: AxiosResponse<Match[]> = await _get<Match[]>(url);
    return response.data;
  });

  return {
    recentMatches: data,
    error,
    isLoading,
  };
};

export default useFetchRecentMatches;
