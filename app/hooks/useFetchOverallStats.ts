import useSWR from "swr";
import { _get } from "../api/service";
import { AxiosResponse } from 'axios';
import useDateFormatter from "./useDateFormatter";
import { useMemo } from 'react';

interface Metric {
    id: number,
    total_matches: number,
    total_teams: number,
    total_players: number,
    last_updated: string;
}

const useFetchOverallStats = () => {
    const { data, error, isLoading } = useSWR<Metric[]>('/stats', async (url: string): Promise<Metric[]> => {
        const response: AxiosResponse<Metric[]> = await _get<Metric[]>(url);
        return response.data;
    });
 
    const overallStats = useMemo(() => {
        if (!data) return null;

        return data.map(item => {
            const formattedDate = useDateFormatter(item.last_updated);

            return {
                ...item,
                last_updated: formattedDate,
            };
        });
    }, [data]);

    return {
        overallStats,
        error,
        isLoading,
    };
};

export default useFetchOverallStats;
