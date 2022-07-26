import React from 'react'
import NewCollectionCard from '../components/newCollectionPage/NewCollectionCard'
import SectionTitle from '../components/SectionTitle'

type NewCollection={
  name:string,
  description:string,
  imageUri:string
}
type props ={
  newCollection:NewCollection[]
}
export default function New({newCollection}:props) {
  return (
    <div>
      <SectionTitle title="New Collections"/>
      <div className='grid grid-cols-5 gap-y-6'>
          {newCollection.map(({name,imageUri,description},index)=>(
            <NewCollectionCard key={index} name={name} description={description} imageUri={imageUri}/>
          ))}
      </div>
     
    </div>
  )
}
export async function getServerSideProps(){
    let newCollection:NewCollection[]=Array.from(Array(20).keys())as unknown as NewCollection[]
    newCollection= newCollection.map(()=>({
        name:"Okay Bears",
        description:"The Okay bears is a collection  of Nft mutants and heroes.... ",
        imageUri:"https://lh3.googleusercontent.com/P-g6dOO3CBlXwgh7ZGVmt6gjkw09E6XcanRxSHeVO9jX7MFN5_aSRoMrG3dsbYqpYjb9cPQaWEnbw3eF40T1y1gO-GRbaaG9ZyHfGw=w302"
    }))
  return{props:{
      newCollection
    }
  }


}
