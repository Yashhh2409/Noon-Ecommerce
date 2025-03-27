import filters from "@/data/filters";

const fetchFilters = async () => {
    try {
        // const response = await fetch("@/data/filters");
        // if(!response.ok) throw new Error("Failed to load filters data");
        // await response.json();

        // console.log("Response is: ",response.json());
        return filters; //for static json file
        
    } catch (error) {
        console.error("Error fetching filters:", error);
        return {filter: []};
    }
}

export default fetchFilters