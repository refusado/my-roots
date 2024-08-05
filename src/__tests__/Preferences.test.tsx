// Preferences.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Preferences } from '@/app/explorar/Preferences';
import { questions } from '@/utils/questions';
import { OnboardResponses } from '@/components/onboard';

describe('Preferences Component', () => {
  it('should render onboarding redirect when there is no filters', () => {
    render(
      <Preferences filters={null} clearPreferences={() => {}} userTags={[]} />,
    );

    expect(screen.getByTestId('RedirectToOnboard')).toBeDefined();
  });

  it('should display correct user tags based on the selected preferences', () => {
    const filters: OnboardResponses = {
      q1: 3,
      q2: 2,
      q3: 1,
      q4: 1,
      q5: 0,
    };
    const expectedTags = [
      'interno',
      'luz baixa',
      'moderada',
      'médio',
      'cuidado diário',
    ];

    let userTags: string[] = [];
    questions.forEach(({ id, options }) => {
      const selectedOption = filters[id];

      if (options[selectedOption]) {
        userTags.push(...options[selectedOption].tags);
      }
    });

    expect(userTags).toEqual(expectedTags);

    render(
      <Preferences
        filters={filters}
        userTags={userTags}
        clearPreferences={() => {}}
      />,
    );

    expectedTags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeDefined();
    });
  });

  it('should call clearPreferences function when clear button is clicked', () => {
    const preferences = {
      clear() {},
    };

    const clearPreferencesSpy = vi.spyOn(preferences, 'clear');

    const { container } = render(
      <Preferences
        filters={{}}
        clearPreferences={preferences.clear}
        userTags={[]}
      />,
    );

    const button = container.querySelector('button');
    expect(button).toBeDefined();
    expect(button?.innerHTML).toContain('Limpar preferências');

    if (button) fireEvent.click(button);
    expect(clearPreferencesSpy).toHaveBeenCalledTimes(1);
  });
});
