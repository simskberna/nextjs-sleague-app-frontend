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
interface MatchesResponse {
  content: Match[];
}
const useFetchRecentMatches = (page:number=0, size:number = 10) => {
  const { data, error, isLoading } = useSWR<MatchesResponse>(`/matches?page=${page}&size=${size}`, async (url: string): Promise<MatchesResponse> => {
    const response: AxiosResponse<MatchesResponse> = await _get<MatchesResponse>(url);
    return response.data;
  });

  return {
    recentMatches: data?.content,
    error,
    isLoading,
  };
};

export default useFetchRecentMatches;
