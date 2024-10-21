import { AxiosResponse } from "axios";
import { _get } from "../api/service";
import useSWR from "swr";

interface Review {
    id:number;
    name:string;
    score:string;
    date:string;
    comment:string;
}
interface ReviewResponse {
    content: Review[];
  }

const useFetchReviews = (page: number = 0, size: number = 10) => {
    const {data,error,isLoading} = useSWR<ReviewResponse>(`/reviews?page=${page}&size=${size}`, async (url:string): Promise<ReviewResponse> => {
        const res: AxiosResponse<ReviewResponse> = await _get<ReviewResponse>(url);
        return res.data
    });

    return {
        reviews:data?.content,
        error,
        isLoading
    }
}

export default useFetchReviews