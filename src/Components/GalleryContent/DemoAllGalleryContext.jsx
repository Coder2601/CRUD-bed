import React from 'react'
import { cakesGallery } from './GalleryData';
import CakeContainer from './CakeContainer';

const DemoAllGalleryContext = () => {
  const dryArr= cakesGallery.filter(product=>product.category === 'DryCake');
  const cakeArr= cakesGallery.filter(product=>product.category === 'Cake');
  const cupCakeArr= cakesGallery.filter(product=>product.category === 'CupCake');
  const cheesecCakeArr= cakesGallery.filter(product=>product.category === 'CheeseCake');
  const TwoTierringCakeArr= cakesGallery.filter(product=>product.category === 'TwoTierRingCake');
  const kidsThemeArr= cakesGallery.filter(product=>product.category === 'kidsTheme');
  const othersArr= cakesGallery.filter(product=>product.category === 'others');

  return (
    <>
    <div className='color'>
        <img className='galleryimg' src='/images/pink4.jpg' alt="gallery" height={400} width={400} />
        <h2 className='gallery-logo'>GALLERY</h2>

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>DRY CAKES</h1>
        <CakeContainer allData={dryArr} />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading  bg-line-top'>CAKES</h1>
        <CakeContainer allData={cakeArr} />

        <img className='galleryhead bg1'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>TWO TIER & RING CAKES</h1>
        <CakeContainer allData={TwoTierringCakeArr} />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading  bg-line-top'>KIDS THEME</h1>
        <CakeContainer allData={kidsThemeArr} />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>CUPCAKES</h1>
        <CakeContainer allData={cupCakeArr} />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>CHEESECAKES</h1>
        <CakeContainer allData={cheesecCakeArr} />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>OTHERS</h1>
        <CakeContainer allData={othersArr} />

        
    </div>
    </>
  )
}

export default DemoAllGalleryContext