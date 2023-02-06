import Image from "next/image";
import { ChartBarIcon, HandThumbUpIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const router = useRouter();
    var thumbnails_default = result.snippet.thumbnails.maxres ? result.snippet.thumbnails.maxres.url : result.snippet.thumbnails.high.url
    
    return (
        <Link href={`/episode/${result.episode_number}`}>
            <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50" onClick={() => {
            router.push({pathname: '/episode/[id]', query: { id: result.episode_number }})
        }}>
                <Image
                    height={1080}
                    width={1920}
                    src={
                        `${thumbnails_default}` ||`${thumbnails_default}`
                    }
                    alt="images"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto"
                    }} />
                <div className="p-2">
                    <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                        {result.snippet.title || result.snippet.original_name || result.snippet.name}
                    </h2>
                    <p className="flex items-center opacity-0 group-hover:opacity-100">
                        <p className="truncate max-w-md">{result.snippet.publishedAt.replace("T", " ").replace("Z","")}</p>
                        <ChartBarIcon className="h-5 mx-2" />
                        {result.statistics.viewCount}
                        <HandThumbUpIcon className="h-5 mx-2" />
                        {result.statistics.likeCount}
                    </p>
                </div>
            </div>
        </Link>
    );
})

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;