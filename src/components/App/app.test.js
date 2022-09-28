import { render, screen, fireEvent } from '@testing-library/react';
import App from './app';

test('Button has correct initial color', () => {
    render(<App />);

    const colorButton = screen.getByRole('button', { name: 'Mix images' });

    expect(colorButton).toHaveClass('red');

    //fireEvent.click(colorButton);

    // expect(colorButton).toHaveClass('blue' || 'red' || 'yellow' || 'green');
});

test('Button changes text', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: 'AutoClick off' });

    fireEvent.click(button);

    expect(button).toHaveTextContent('AutoClick on');
});
