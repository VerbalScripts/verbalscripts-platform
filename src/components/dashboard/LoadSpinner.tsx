import '../../app/loading.css'

export default function LoadSpinner() {
  return (
    <div className='flex flex-col items-center py-10 min-h-screen  md:py-36'>
      <div className='lds-default'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
