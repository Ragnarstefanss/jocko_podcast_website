import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

const SimilarItems = forwardRef(({ similar, media_type }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const router = useRouter();
    const item = similar
    return (
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 p-4 cursor-pointer" ref={ref} onClick={() => {
            router.push({
            pathname: media_type ? '/'+media_type+'/[id]' : '/movie/[id]',
            query: { id: item.id },
            })
        }}>
            <img src={`${BASE_URL}${item.poster_path}`} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-2">{item.title?item.title:item.name}</h2>
            <p className="text-sm text-gray-600">{item.release_date?item.release_date:item.air_date}</p>
        </div>
    );
})

SimilarItems.displayName = "Similar Content";

export default SimilarItems;