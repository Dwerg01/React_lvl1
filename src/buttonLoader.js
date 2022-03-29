import './App.css';
import { useState } from 'react';

const LoadingButton = (props) => {
    const { onClick, loading, label } = props;
    return (
        <button onClick={onClick} type='button'>
            {loading ? <div className="loader" /> : label}
        </button>
    )
}


function App() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <LoadingButton
                label="press here"
                loading={isLoading}
                onClick={() => setIsLoading(!isLoading)}
            />
        </>
    );
}



export default App;