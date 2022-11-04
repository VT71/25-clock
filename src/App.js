import './App.css';
import LengthEdit from './components/LengthEdit';
import Timer from './components/Timer';
import Controls from './components/Controls';

function App() {
    return (
        <div className='root my-4 d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='main-title text-center'>25 + 5 Clock</h1>
                        <h2 className='author-text text-center'>
                            Created by{' '}
                            <span className='author-name'>Victor Toma</span>
                        </h2>
                    </div>
                </div>
                <div className='row mt-5 gy-4'>
                    <div className='col-md-6 text-center'>
                        <LengthEdit property='Break' />
                    </div>
                    <div className='col-md-6 text-center'>
                        <LengthEdit property='Session' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Timer />
                        <audio id='beep'>
                            <source src='sounds/beep.mp3' type='audio/mp3' />
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Controls />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
