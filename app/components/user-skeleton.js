import React from 'react'

const SkeletonUser = () => {
  return (
    <div
    className=" space-y-4 bg-slate-50 p-4 rounded-md  gradient-border"
  >
    <div className='flex flex-col gap-4'>

        <div className='flex gap-4 items-center'>  <div className="avatar">
  <div className="">
  <div className="skeleton w-12 h-12 rounded-full"></div>

  </div>
</div>

<div className='flex flex-col gap-4'>
  <span className='text-md font-bold'>
  <div className="skeleton w-20 h-2"></div>
</span>  
<span className='text-md font-medium'>
<div className="skeleton w-40 h-2"></div>
</span>
</div></div>
  

<div className='flex gap-8'>
  <div className='flex flex-col gap-2'>
<span className='text-md font-semibold'> <div className="skeleton w-8 h-2"></div>

</span>
<span>Followers</span>
</div>

<div className='flex flex-col gap-2'>
<span className='text-md font-semibold'>   <div className="skeleton w-8 h-2"></div>

</span>
<span>Following</span>
</div>  
<div className='flex flex-col gap-2'>
<span className='text-md font-semibold'> <div className="skeleton w-8 h-2"></div>

</span>
<span>Likes</span>
</div> 

</div>

    

    </div>
  </div>
  )
}

export default SkeletonUser