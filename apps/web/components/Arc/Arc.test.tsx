import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { Arc, ArcProps } from './Arc';

const defaultProps: ArcProps = {
  cx: 0,
  cy: 0,
  r: 100,
  startAngle: 0,
  endAngle: 2 * Math.PI,
};

const wrapper = ({ children }: { children: ReactNode }) => {
  return <svg>{children}</svg>;
};

const renderComponent = (props: Partial<ArcProps> = {}) => render(<Arc {...defaultProps} {...props} />, { wrapper });

describe('Arc', () => {
  it('renders correctly', () => {
    renderComponent();
    expect(screen.getByTestId('arc')).toBeInTheDocument();
  });

  it('adds a path direction', () => {
    renderComponent({ r: 138 });
    screen.debug();
    expect(screen.getByTestId('arc')).toHaveAttribute('d', expect.stringContaining('A 138 138'));
  });
});
