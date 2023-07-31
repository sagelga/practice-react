import React, { useState } from 'react';
import './App.css';
import CheckoutModal from './components/CheckoutModal/CheckoutModal';
import Catalog from './components/Catalog/Catalog';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { DUMMY_INVENTORY } from './data/dummy-data';

function App() {
    const [inventoryData, setInventoryData] = useState(DUMMY_INVENTORY);
    const [cartModalShown, setCartModalShown] = useState(false);

    const openModalButtonHandler = () => {
        setCartModalShown(true);
    };

    const closeModalButtonHandler = () => {
        setCartModalShown(false);
    };

    return (
        <div className='App'>
            {cartModalShown && (
                <CheckoutModal onCloseModal={closeModalButtonHandler} />
            )}
            <NavigationBar openModalButton={openModalButtonHandler} />
            <Catalog inventoryData={inventoryData} />
        </div>
    );
}

export default App;
