import useData from "./useData";

export interface Platform {
    id: number;
    name: number;
    slug: number;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;