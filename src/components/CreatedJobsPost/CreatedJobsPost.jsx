import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { convertDate, displayNum } from '../../utils/utils'
import { useNavigate } from 'react-router-dom'
export default function CreatedJobsPost({ postUser, pathName }) {
  const navigate = useNavigate()
  return (
    <div className='pl-[40px] flex items-center justify-center border-2 rounded-[20px] border-black m-16 hover:shadow-2xl cursor-pointer hover:bg-[#ACFFFC]'>
      <div className='flex items-center justify-center font-Itim font-medium'>
        <div className='flex-col items-center justify-center gap-6 p-8 max-w-[40rem]'>
          <div className='text-[24px]'>{postUser.title}</div>
          <div className='flex text-[24px] items-center'>
            <GiPositionMarker size={20} />
            <div className='-mt-1'> {postUser.address} </div>
          </div>
          <div className='mt-5 text-[16px]'>
            年齢: {postUser.age} &emsp; 実験: {postUser.experience} &emsp; 給料: {displayNum(postUser.salary)}
          </div>
          <div className='mt-5'>勤務開始日: {convertDate(postUser.dateStart)}</div>

          <div className='w-[30vw] mt-5 line-clamp-2'>{postUser.description}</div>
        </div>
        <div className='ml-[8rem]'>
          <button
            onClick={() => navigate(pathName)}
            className='bg-[#C226F9] text-white rounded-[20px] self-end px-[2vw] py-2 hover:bg-green-600 h-[48px]'
          >
            xem thông tin
          </button>
        </div>
      </div>
    </div>
  )
}
