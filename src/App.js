import img from './assets/images/image-product-desktop.jpg';
import icon from './assets/images/icon-cart.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <img src={img} alt="" className='big_img' />
      <div className='cont p-10 h-full flex flex-col  items-start justify-between'>
          <span className='text-[#6c7289] text-xs tracking-[6px]'>PERFUME</span>
          <h1 className='text-[#1c232b] text-4xl font-bold'>Gabrielle Essence Eau De Parfum</h1>
          <p className='text-[#6c7289]'>A floral, solar and voluptuous interpretation composed by olivier polge, perfumer-creator for the house of chanel.</p>
          <p className='flex flex-row items-center gap-5'><span className='text-[#3c8067] text-4xl font-bold'>$149.99</span><span className='text-[#6c7289] line-through'>$169.99</span></p>
        <button className='w-full h-[50px] rounded-md bg-[#3c8067] hover:bg-[#114633] text-white flex font-bold flex-row items-center justify-center gap-3'><img src={icon} alt="cart icon" />Add to Cart</button>
      </div>
    </div>
  );
}

export default App;
