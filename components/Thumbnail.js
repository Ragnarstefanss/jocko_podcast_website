import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const router = useRouter();

    return (
        <Link href={result.media_type ? `${result.media_type}/${result.id}` :  `/movie/${result.id}`}>
            <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50" onClick={() => {
            router.push({pathname: result.media_type ? result.media_type+'/[id]' : '/movie/[id]', query: { id: result.id }})
        }}>
                <Image
                    height={1080}
                    width={1920}
                    src={
                        `${BASE_URL}${result.backdrop_path || result.poster_path}` ||`${BASE_URL}${result.poster_path}`
                    }
                    alt="images"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto"
                    }} />
                <div className="p-2">
                    <p className="truncate max-w-md">{result.overview}</p>
                    <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                        {result.title || result.original_name || result.name}
                    </h2>
                    <p className="flex items-center opacity-0 group-hover:opacity-100">
                        {result.media_type && `${result.media_type} •`}{" "}
                        {result.release_date || result.first_air_date} •{" "}
                        <HandThumbUpIcon className="h-5 mx-2" />
                        {result.vote_count}
                    </p>
                </div>
            </div>
        </Link>
    );
})

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;