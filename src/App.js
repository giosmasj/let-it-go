import logo from './logo.svg';
import './App.css';
import Tiptap from './Tiptap.tsx'
import MenuBar from './MenuBar.jsx'
import { useEffect } from 'react';

function App() {

  const fogNation = () => {
    document.querySelector('.App-header').setAttribute('style', 'display: none');
    return (
      <modal className='fading-page' addEventListener={("animationend", handleAnimationEnd)}>Gosh! Letting that go like that was bad ass!</modal>
    )
  };

  const handleAnimationEnd = () => {
    window.location.reload();
  }
      
  return (
    <div>
      <div class="row">
        <div className='col align-self-center'>
          <h3 class="text-center">Let it all out here. It's for your eyes only.</h3>
          {/* <form className='text-center'> */}
            <MenuBar />
            <Tiptap />
            {/* <textarea class="form-control" rows="20" id='Textarea' placeholder="start typing what's on your mind"></textarea> */}
            {/* <div> */}
              {/* <input class="col align-self-center" className='Input' type="submit" value="Let it go." onClick={fogNation}/> */}
            {/* </div> */}

          {/* </form> */}
        </div>

      </div>
        {/* <Tiptap /> */}
    </div>
  );
}

export default App;
