import React from 'react';
import { screen, getByText, render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import RequestPage from './requestpage';

describe('RequestPage render', () => {

    test("Check RequestPage elements", () => {
        const logoElement = screen.getByText(/Good Fortune/i);
        expect(logoElement).toBeInTheDocument();

        const scrollElement = screen.getByText(/Unlock your self-confidence/i);
        expect(scrollElement).toBeInTheDocument();

    });

});