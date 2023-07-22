// import useData from "./useData";
import platforms from '../data/platforms';

export interface Platform {
    id: number;
    name: number;
    slug: number;
}

const usePlatforms = () => ({data: platforms, isLoading: false, error: null}); // useData<Platform>('/platforms/lists/parents');

export default usePlatforms;