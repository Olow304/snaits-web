import React from 'react';

function ActionButtons(props) {
    return (
        <div className='flex gap-6 mobile:flex mobile:flex-col mobile:w-full'>
            <button className='bg-[#000] text-snaits-100 text-sm font-normal py-3 px-4 rounded-md uppercase'>
                Become a speaker
            </button>
            <button className='bg-[#ffffff] text-snaits-800 text-sm font-normal py-3 px-4 rounded-md uppercase border-[1px] border-snaits-600'>
                join our slack
            </button>
        </div>
    );
}

export default ActionButtons;