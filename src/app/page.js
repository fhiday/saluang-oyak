import Image from 'next/image'
import { donasi, facebook, imgHeader, instagram, makIson, twitter, youtube } from './assets'

export default function Home() {
  return (
    <div>
      <div className='md:hidden block'>
        <div className='w-full relative text-white dark:text-white'>
          <Image className='z-0 w-full' src={imgHeader} alt='header saluang oyak'></Image>
          <div className='absolute z-10 top-24'>
            <h2 className='font-sans font-bold text-3xl ms-24 mb-2'>Saluang Oyak</h2>
            <p className='text-sm ms-20 font-sans font-normal'>Memperingati Ulang Tahun Indonesia</p>
            <p className='text-sm ms-[85px] font-sans font-normal'>17 Agustus 1945 - 17 Agustus 2023</p>
          </div>

          {/** calender */}
          <div className='w-[355px] h-[117px] mx-auto bg-[#5A47AB] rounded-md'>
            <div className='grid grid-cols-3 p-5 gap-2'>
              <div className='border-r-2'>
                <p className='font-sans font-semibold'> Agustus </p>
                <p className='font-sans font-semibold text-5xl'> 27 </p>
              </div>
              <div className='col-span-2'>
                <p className='font-sans font-semibold'> Minggu </p>
                <p className='font-sans font-normal text-sm'> 14 : 30 wib - Selesai </p>
                <p className='font-sans font-semibold text-sm'> Jorong Tobek </p>
                <p className='font-sans font-semibold text-sm'> Kenagarian Banja Loweh </p>
              </div>
            </div>
          </div>


          <div className='grid grid-cols-1 p-5'>
            <div className='text-center font-sans'>
              Kami dengan gembira mengundang Anda untuk hadir dalam acara istimewa kami,
              <p className='font-semibold text-xl'>Saluang Oyak, Samalam Suntuak</p>
              yang akan diadakan dalam rangka memperingati Ulang Tahun Indonesia yang ke-78. Acara ini akan menjadi perayaan kekayaan budaya dan semangat persatuan Indonesia melalui seni musik tradisional Saluang Oyak.
            </div>
          </div>

          <div className='grid grid-cols-1 p-8'>
            <div className='rounded-md shadow-md shadow-slate-400'>
              <Image src={makIson} className='w-full rounded-md' alt='mak ison tukang saluang oyak'></Image>
            </div>
          </div>

          <div className='grid grid-cols-1 p-5'>
            <div className='font-sans'>
              <p className='font-sans font-semibold'>Menghadirkan :</p>
              <ul className='list-decimal ms-8'>
                <li>Tukang Oyak ED</li>
                <li>Tukang Saluang Rafli</li>
                <li>Tukang Dendang Ison</li>
                <li>Tukang Dendang Cici</li>
                <li>Tukang Dendang Rita</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-1 p-5'>
            <div className='font-normal font-sans'>
              Kami sangat menantikan kehadiran Anda dalam acara ini untuk bersama-sama merayakan semangat kemerdekaan dan keberagaman Indonesia. Mari kita berbagi kebahagiaan dan kesatuan dalam acara yang penuh warna dan makna ini.
            </div>
          </div>

          <div className='grid grid-cols-1 gap-2 relative'>
            <Image src={donasi} alt='open donasi untuk acara saluang oyak' className='w-full' />
            <div className='absolute top-20 left-10 right-10 text-center'>
              <h2 className='text-xl font-sans font-bold mb-3'>Donasi</h2>
              <p className='font-sans font-normal mb-2 text-sm'>
                Kami mengundang Anda untuk berkontribusi melalui donasi dalam acara Saluang Oyak kami. Dukungan Anda akan membantu mempertahankan warisan budaya kami dan memastikan kesinambungan seni musik tradisional ini. Setiap sumbangan adalah langkah menuju melestarikan warisan berharga bagi generasi mendatang.
              </p>
              <p className='font-sans font-semibold'>Kirimkan donasi anda ke :</p>
              <p className='font-sans font-semibold text-sm'>BRI : 5502-0101-0727-536 ( Fauzan Hidayat )</p>
            </div>
          </div>

          <div className='text-center w-full h-24'>
            <div className='grid grid-cols-4 gap-3 mx-auto mt-10 w-32'>
              <div>
                <Image src={facebook} alt='facebook.com' className='w-[32px]' />
              </div>
              <div>
                <Image src={instagram} alt='instagram.com' className='w-[32px]' />
              </div>
              <div>
                <Image src={twitter} alt='twitter.com' className='w-[32px]' />
              </div>
              <div>
                <Image src={youtube} alt='youtube.com' className='w-[32px]' />
              </div>
            </div>
            <p className='mt-3 text-sm font-sans font-normal'>&copy; copyright 2023 - The Jorta Community</p>
          </div>

        </div>
      </div>

    </div>
  )
}
