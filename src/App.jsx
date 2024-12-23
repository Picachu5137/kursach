import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileNav } from "./components/MobileNav" 

import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CatalogPage } from './pages/CatalogPage';
import { Page404 } from './pages/404Page';

export function App() {

    return (
        <>
            <Header />
            <main>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:product_slug" element={<ProductPage />} />
                        <Route path="/catalog/:category_slug" element={<CatalogPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Router>
            </main>
            <Footer />
            < MobileNav />
        </>
    );
}

