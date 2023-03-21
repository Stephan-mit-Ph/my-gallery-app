import Image from "next/image";
import useSWR from "swr"
import React from 'react';


const fetcher = (...args) => fetch(...args).then(res => res.json())



export default function Spotlight () {
    const {data, error, isLoading} = useSWR("https://example-apis.vercel.app/api/art", fetcher)


    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <h2>Loading...</h2>
    
    const currentArtist = data[Math.floor(Math.random() * data.length)]

    return (<>   
                    
        <Image src={currentArtist.imageSource}
               alt={currentArtist.name}
               height={400}
                width={300}
               ></Image> 
               <h3 key= {Math.random()}>Spotlight: @{currentArtist.name}</h3>     
              </>
      )
  }