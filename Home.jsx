import  Products  from "../products/Products"


 

function Home({user}) {

  return (
    <>
    <h1>ANA SAYFA</h1>
    <Products user={user}/>
    
    </>
  )
}

export default Home