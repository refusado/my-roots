import { Onboard } from '@/components/onboard';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Onboard component', () => {
  it('should render the correct starter step', () => {
    const { container } = render(<Onboard />);

    const title = container.querySelector('h2');

    expect(title).toBeDefined();
    expect(title?.textContent).toEqual(
      'Vamos descobrir quais seriam as melhores plantas para você criar',
    );
  });

  it('should render all questions steps correctly', () => {
    const { container } = render(<Onboard />);
    const stepsTitles = [
      'span for starter step',
      'Onde você planeja montar seu jardim?',
      'Qual é a quantidade de luz natural que o local recebe?',
      'Qual é a temperatura média do ambiente?',
      'Qual é o tamanho do espaço disponível para as plantas?',
      'Com que frequência você pode cuidar das plantas?',
      'span for final step',
    ];

    const start = container.querySelector('button');

    expect(start).toBeDefined();
    expect(start?.textContent).toEqual('Começar');
    if (start) fireEvent.click(start);

    stepsTitles.forEach((title, i) => {
      const nextStep = container.querySelectorAll('h2')[i];
      expect(nextStep).toBeDefined();
      expect(nextStep?.textContent).toEqual(title);
    });
  });
});
