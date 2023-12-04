import React from 'react';
import { screen, getByRole, render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import Main from './main';

describe('Main render page', () => {

    test("Check Index page elements", () => {
        render(<Main />);

        const sloganElement = screen.getByText(/Your Path to Happiness and Enlightenment!/i);
        expect(sloganElement).toBeInTheDocument();
    
        const loginElement = screen.getByText(/Read more about Good Fortune/i);
        expect(loginElement).toBeInTheDocument();

        const section2Element = screen.getByText(/Meet Althea, Your Guiding Light to Positivity and Wisdom!/i);
        expect(section2Element).toBeInTheDocument();

        const section3Element = screen.getByText(/Delve into a collection of timeless wisdom with our daily proverbs!/i);
        expect(section3Element).toBeInTheDocument();

        const footerElement = screen.getByText(/©Good Fortune 2023 - all rights reserved/i);
        expect(footerElement).toBeInTheDocument();

    });

});


