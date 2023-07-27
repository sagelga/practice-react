import React, { useState } from 'react';
import './App.css';
import { DUMMY_INVENTORY } from './data/dummy-data';

import ShoppingItemList from './components/ShoppingItemList';
import NavigationBar from './components/navbar/NavigationBar';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

const App = () => {
    const [inventoryData, setInventoryData] = useState(DUMMY_INVENTORY);
    const [cartModalShown, setCartModalShown] = useState(true);

    const openModalButtonHandler = () => {
        setCartModalShown(true);
    };

    const closeModalButtonHandler = () => {
        setCartModalShown(false);
    };

    return (
        <div className='App'>
            {cartModalShown && (
                <Modal closeModalButton={closeModalButtonHandler} />
            )}
            <NavigationBar openModalButton={openModalButtonHandler} />
            <ShoppingItemList inventoryData={inventoryData}>
                Test
            </ShoppingItemList>
            <Footer />
        </div>
    );
};

export default App;
