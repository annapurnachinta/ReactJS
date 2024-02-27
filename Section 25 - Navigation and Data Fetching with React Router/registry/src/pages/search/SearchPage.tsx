import { useLoaderData } from "react-router-dom"
import { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/packageListItem";

export default function SearchPage() {
    const {searchResult} = useLoaderData() as SearchLoaderResult
    const renderedResults = searchResult.map((result)=>{
        return <PackageListItem pack={result} key={result.name}></PackageListItem>
    })
    
    return (<div>
        <h1 className="text-2xl font-bold my-6">Search Page</h1>
        <div className="space-y-4 mt-4">
            {renderedResults}
        </div>
    </div>)
}