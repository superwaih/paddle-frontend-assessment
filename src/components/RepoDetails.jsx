import React from 'react'

const RepoDetails = ({Avatar, RepoName, RepoDesc, RepoStat, RepoIssues}) => {
  return (
    <div className='flex bg-white transform hover:scale(105) lg:h-72 shadow-xl max- rounded'>
        <div className="avatar w-2/5">
            <img className='w-full object-cover h-full rounded' src={Avatar} alt="repo author avatar" />
        </div>
        <div className="repoDetail w-3/5">
            <h4 className='font-bold p-3  md:p-4' >{RepoName}</h4>
            <p className=' font-semibold text-justify p-3 md:p-4' >{RepoDesc?.length > 100 ? RepoDesc.slice(0,100)+'...' : RepoDesc}</p>
            <ul className='flex  justify-between pl-4 pr-4' >
                <li>Stars: <span className='text-cyan-600 font-bold' >{RepoStat}</span></li>
                <li>Issues: <span className='text-cyan text-cyan-600 font-bold' >{RepoIssues}</span> </li>
                <li></li>

            </ul>
        </div>
    </div>
  )
}

export default RepoDetails