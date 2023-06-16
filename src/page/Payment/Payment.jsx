import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPayment } from '../../api/payment.api'
import PayPalButton from './PayPalButton'
import { BiCheckCircle } from 'react-icons/bi'
import { FiClock } from 'react-icons/fi'

export default function Payment() {
  const { id } = useParams()
  console.log(id)
  const { data } = useQuery({
    queryKey: ['payment', id],
    queryFn: () => {
      return getPayment(id)
    }
  })
  const payment = data?.data.data
  console.log(payment)

  const post = data?.data

  const setDay = (day) => {
    return day === true ? 'rgb(34 197 94 / var(--tw-text-opacity))' : 'black'
  }

  return (
    <div>
      {payment && (
        <div>
          <div className=' bg-[#DCEAFF] flex justify-center items-center flex-col'>
            <div className='w-4/5 bg-[#FFF] text-center mt-40 rounded-3xl p-8 text-6xl font-bold'>Chi tiết hóa đơn</div>
            <div className='flex w-[95vw] h-[150vh] m-auto gap-16 mt-12'>
              <div className='flex flex-auto w-[20vw]'>
                <div className='flex-1 m-5 p-12 bg-[#FFF] rounded-[20px] border-[1px] border-black'>
                  <div className='flex flex-row'>
                    <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-[12rem] h-[12rem] flex justify-center items-center '>
                      <img src='{post.userID.image}' alt='imageuser' />
                    </div>
                    <div className='flex flex-col justify-center gap-6 ml-5'>
                      <div className='text-5xl'>Nguyen Van A</div>
                      <div className='text-[20px]'>nguyenvana@gmail.com</div>
                    </div>
                    <div className='ml-auto w-[15rem] text-[20px]'>67 Le Thanh Nghi, Hai Ba Trung, Ha Noi</div>
                  </div>
                  <div className='flex items-center bg-gradient-to-b from-[#6937AAEB]/[.92] to-[#130722EB]/[.92] h-[20rem] rounded-[20px] text-white text-[20px] p-10 mt-10'>
                    <div className='flex flex-col gap-4'>
                      <div>Mã hóa đơn</div>
                      <div>INV-2023-05</div>
                      <div>Ngày bắt đầu: 1/4/2023</div>
                      <div>Ngày đến hạn: 1/5/2023</div>
                    </div>
                    <div className='ml-auto flex flex-col gap-6 w-[16rem]'>
                      <div>Người nhận:</div>
                      <div>Lê Thị A</div>
                      <div>Thanh Nhàn, Hai Bà Trưng, Hà Nội</div>
                    </div>
                  </div>
                  <div className='flex flex-row items-center mt-32'>
                    <div className='text-6xl text-[#7101FF]'>
                      <FiClock />
                    </div>
                    <div className='ml-6'>作業時間</div>
                  </div>
                  <div className='px-20'>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>月曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          style={{ color: setDay(post.data.mo_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          style={{ color: setDay(post.data.mo_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>火曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          style={{ color: setDay(post.data.tu_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          style={{ color: setDay(post.data.tu_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>水曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          key={1}
                          style={{ color: setDay(post.data.we_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          style={{ color: setDay(post.data.we_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>木曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          style={{ color: setDay(post.data.th_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          style={{ color: setDay(post.data.th_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>金曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          key={1}
                          style={{ color: setDay(post.data.fr_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          key={2}
                          style={{ color: setDay(post.data.fr_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>土曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          key={1}
                          style={{ color: setDay(post.data.sa_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          key={2}
                          style={{ color: setDay(post.data.sa_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>日曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          key={1}
                          style={{ color: setDay(post.data.su_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          key={2}
                          style={{ color: setDay(post.data.su_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-16 mx-6'>
                    <div className='flex flex-row p-2 border-y-[1px] border-black gap-20 text-center'>
                      <div className='ml-12 w-32'>Số buổi</div>
                      <div className='w-52'>Tiền/buổi</div>
                      <div className='ml-auto mr-20 w-52'>Tổng tiền</div>
                    </div>
                    <div className='flex flex-row p-2 gap-20 mt-2 text-center items-center'>
                      <div className='ml-12 w-32 flex items-center justify-center'>
                        <div className='w-20 bg-[#D9D9D9] rounded-[10px] p-3'>{payment.count}</div>
                      </div>
                      <div className='w-52 flex items-center justify-center'>
                        <div className='w-48 bg-[#D9D9D9] rounded-[10px] p-3'>200.000 VND</div>
                      </div>
                      <div className='ml-auto mr-20 w-52 flex items-center justify-center'>
                        <div className='w-48 bg-[#D9D9D9] rounded-[10px] p-3'>{payment.totalPrice} VND</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-col gap-16'>
                <div className='flex-1 m-5 bg-[#FFF] rounded-[20px] border-[1px] border-black p-10'>
                  <div className='text-center text-4xl'>Thông tin thêm</div>
                  <div className='flex flex-col gap-2 text-[18px] mt-12'>
                    <div className='flex flex-row'>
                      <div>Công việc:</div>
                      <div className='ml-auto'>Chăm bé trai 20 tuổi ở Hà Nội</div>
                    </div>
                    <div className='flex flex-row'>
                      <div>Người nhận việc:</div>
                      <div className='ml-auto'>Lê Thị A</div>
                    </div>
                    <div className='flex flex-row'>
                      <div>Địa chỉ:</div>
                      <div className='ml-auto'>Thanh Nhàn, Hai Bà Trưng, Hà Nội</div>
                    </div>
                    <div className='flex flex-row'>
                      <div>Số buổi làm/ tuần:</div>
                      <div className='ml-auto'>7 buổi</div>
                    </div>
                    <div className='flex flex-row'>
                      <div>Phí/ buổi:</div>
                      <div className='ml-auto'>200.000 VND</div>
                    </div>
                    <div>Mô tả công việc:</div>
                    <div>
                      Trẻ dễ tổn thương, cần người che chở. Thay ba mẹ chăm trẻ, khi vắng nhà. Cơ bản thì trẻ khá ngoan,
                      ...v.v
                    </div>
                  </div>
                </div>
                <div className='flex-1 m-5 bg-[#FFF] rounded-[20px] border-[1px] border-black p-10'>
                  <div className='text-5xl m-6'>Tổng tiền (VND)</div>
                  <div className='text-7xl m-6 mt-20'>6.600.000</div>
                  <div className='text-4xl m-6'>Thanh toán hóa đơn</div>
                  <div className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 h-[17rem] rounded-[20px] text-black text-[20px] p-10 mt-10'>
                    <PayPalButton payment={payment} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}