import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Button } from './button';

describe('Button (modern)', () => {
  it('emits onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    await render(Button, {
      on: {
        onClick: onClick,
      },
    });

    const button = screen.getByRole('button');
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][0]).toBeInstanceOf(PointerEvent);
  });

  it('renders projected text', async () => {
    const content = 'Guardar';
    const rednerContent = `<app-button>${content}</app-button>`;
    await render(rednerContent, {
      imports: [Button],
    });

    expect(screen.getByRole('button', { name: content })).toBeInTheDocument();
  });
});
