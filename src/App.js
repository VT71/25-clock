import './App.css';
import LengthEdit from './components/LengthEdit';

function App() {
    return (
        <div className='root vw-100 vh-100 d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center'>25 + 5 Clock</h1>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-6 text-center'>
                        <LengthEdit property='Break' />
                    </div>
                    <div className='col-6 text-center'>
                        <LengthEdit property='Session' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
