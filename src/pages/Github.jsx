import React, { useEffect, useState } from 'react'
import RepoDetails from '../components/RepoDetails'
import axios from 'axios';

const PAGE_NUMBER = 1
const Github = () => {
    const[data, setData] = useState([])
    const [page, setPage] = useState(PAGE_NUMBER);
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`)
        .then(res => {
            console.log(res.data.items)
            setData([...data, ...res.data.items])
            setLoading(false)
            
            
        })
        .catch(err =>{
            console.log(err)
            setError(true)
        })
    }, [page])

    const scrollToEnd = () =>{
        setPage(page + 1);
    }
    

    window.onscroll = function (){
       if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
           scrollToEnd()
       }
    }
    return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 p-12' >
        {/* if an error occurs return this  */}
        {error && <div>An error occured</div>}
        {/* showing this while the data is loading */}
             {loading &&
              <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
                <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
              </div>  
          }
        {data.length > 0 && data.map((el, index) =>{
            return(
             <RepoDetails key={index} RepoName={el.name} RepoStat={el.stargazers_count} RepoIssues={el.open_issues_count} RepoDesc={el.description} Avatar={el.owner.avatar_url}  />
        )})}
       
    </div>
  )
}

export default Github