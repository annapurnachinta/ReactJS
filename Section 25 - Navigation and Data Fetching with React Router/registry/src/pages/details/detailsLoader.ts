import { Params } from "react-router-dom";
import { getPackages } from "../../api/queries/getPackages";
import { PackageDetails } from "../../api/types/packageDetails";

interface LoadersParams{
    params: Params
}

export interface DetailsLoaderResults{
    details: PackageDetails
}

export async function detailsLoader({params}: LoadersParams): Promise<DetailsLoaderResults>{
    const {name} = params

    if(!name){
        throw new Error("Name must be provided");
    }

    const details = await getPackages(name)

    return {
        details
    }
}