import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

//----- You can custimize GRAQ queries to get different/specific data from Sanity ------
//const res = await client.fetch(`*[_type == 'product'][0]`); // for data at index 0
//const res = await client.fetch(`*[_type == 'product']{title, description}`); // for all titles and description

//----------- To fetch data (title, description, image, price)
async function getData() {
  const res = await client.fetch(`*[_type == 'product']{
    title, 
    description,
    price,
    image
  }`); 
  return res;
}
//--------------------------------------------

//------------To fetch images
const builder = imageUrlBuilder(client); // create builder
function urlFor(source:any) { // Make URL
  return builder.image(source)
}

//--------------------------------------------

// Product type
interface IProduct {
  title: string,
  description:string,
  price: number,
  image: any
}

//------------ Module

export default async function Home() {
  const data:IProduct[] = await getData();
  //console.log(data);
  //item.image.asset._ref
  return (
    <div>
      {data.map((item)=>(
        <div>
          <p> {item.title}</p>
          <p> {item.description}</p>
          <p> {item.price}</p>
          <Image src={urlFor(item.image).width(200).url()} alt="My image" width={200} height={200}></Image>
        </div>
      ))}
    </div>
  )
}
