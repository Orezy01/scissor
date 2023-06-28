import {render, screen, cleanup } from '@testing-library/react';
import Qrcode from '../Qrcode'; 


afterEach(() => {
    cleanup();
});

test('should render Qrcode component', () => {
    render(<Qrcode />);
    const QrcodeElement = screen.getByTestId('qrcode-1');
    expect(QrcodeElement).toBeInTheDocument();
    expect(QrcodeElement).toHaveTextContent('QRCode Generator');
})

test('should have text content of copied link', () => {
    render(<Qrcode />);
    const QrcodeElement = screen.getByTestId('qrcode-2');
    expect(QrcodeElement).toBeInTheDocument();
    expect(QrcodeElement).toHaveTextContent('Enter the copied link to get your Qrcode');
}
)