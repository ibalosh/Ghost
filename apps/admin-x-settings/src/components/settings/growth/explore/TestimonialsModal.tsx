import NiceModal from '@ebay/nice-modal-react';
import {Button, Icon, Modal, Select, TextArea} from '@tryghost/admin-x-design-system';
import {useRouting} from '@tryghost/admin-x-framework/routing';

const TestimonialsModal = NiceModal.create(() => {
    const {updateRoute} = useRouting();

    const migratedFromOptions: Array<{value: string; label: string;}> = [
        {value: 'wordpress', label: 'Wordpress'},
        {value: 'substack', label: 'Substack'},
        {value: 'medium', label: 'Medium'},
        {value: 'beehiiv', label: 'Beehiiv'},
        {value: 'newspack', label: 'Newspack'},
        {value: 'squarespace', label: 'Squarespace'},
        {value: 'patreon', label: 'Patreon'},
        {value: 'memberful', label: 'Memberful'},
        {value: 'other', label: 'Other'}
    ];

    return (
        <Modal
            afterClose={() => {
                updateRoute('explore');
            }}
            cancelLabel=''
            footer={false}
            // height={645}
            padding={false}
            testId='embed-signup-form'
            title=''
            topRightContent='close'
            width={520}
        >
            <div className='h-[140px] bg-gradient-to-tr from-[rgba(142,66,255,0.07)] to-[rgba(142,66,255,0.02)]'></div>
            <div className='mx-6 mt-[-30px] flex size-[60px] items-center justify-center rounded-full bg-gradient-to-t from-[#CFB0FF] to-[#B27EFF]'>
                <svg fill="none" height="26" viewBox="0 0 32 26" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9967 26L18.1562 21.4542C23.4268 19.1176 25.7693 16.5261 26.2712 11.7255C25.5183 12.3627 24.5562 12.7026 23.3431 12.7026C20.1641 12.7026 17.4869 10.1536 17.4869 6.41503C17.4869 2.80392 20.3732 9.72736e-07 24.2634 6.32644e-07C28.2791 2.81581e-07 31.5 3.10131 31.5 8.96405C31.5 17.5458 27.4425 23.0261 19.9967 26ZM3.0098 26L1.12745 21.4543C6.43987 19.1176 8.78235 16.5261 9.24248 11.7255C8.53137 12.3627 7.56928 12.7026 6.35621 12.7026C3.17712 12.7026 0.499999 10.1536 0.499998 6.41504C0.499998 2.80393 3.38627 2.45778e-06 7.23464 2.12135e-06C11.2503 1.77028e-06 14.5131 3.10131 14.5131 8.96405C14.5131 17.5458 10.4556 23.0261 3.0098 26Z" fill="white"/>
                </svg>
            </div>
            <div className='p-7 pt-3'>
                <div>
                    <div className='text-xl font-semibold tracking-tight'>Send a testimonial</div>
                    <div className='mt-1 text-pretty'>
                    We’re featuring sites that share a testimonial more prominently on Ghost Explore.
                    </div>
                </div>
                <div className='mt-5'>
                    <TextArea placeholder='Share your love for Ghost' rows={5} autoFocus></TextArea>
                </div>
                <div className='ml-0.5 mt-4'>
                    <div className='flex items-center gap-2'>
                        <div className='flex size-9 items-center justify-center rounded-full bg-grey-100'>
                            <Icon colorClass='text-grey-700' name='user' size={16} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm font-medium'>By Jamie Larson</span>
                            <span className='text-xs text-grey-700'>Owner — The Blueprint</span>
                        </div>
                    </div>
                </div>
                <div className='mt-10 flex items-center gap-4'>
                    <div className='grow'>
                        <Select
                            options={migratedFromOptions}
                            placeholder='Which platform did you switch from?'
                            testId='migrated-from'
                            onSelect={() => {}}
                        />
                    </div>
                    <Button className='!h-[38px] rounded-lg' color="black" label="Send testimonial" />
                </div>
            </div>
        </Modal>
    );
});

export default TestimonialsModal;
