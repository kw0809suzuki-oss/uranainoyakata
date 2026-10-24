import { renderHook, act } from '@testing-library/react';
import { useDebounce } from './useDebounce';

afterEach(() => vi.useRealTimers());
it('publishes only the final value after the delay', () => {
  vi.useFakeTimers();
  const { result, rerender } = renderHook(({ value }) => useDebounce(value, 100), { initialProps: { value: 'first' } });
  rerender({ value: 'second' });
  act(() => vi.advanceTimersByTime(50));
  rerender({ value: 'third' });
  act(() => vi.advanceTimersByTime(99));
  expect(result.current).toBe('first');
  act(() => vi.advanceTimersByTime(1));
  expect(result.current).toBe('third');
});
it('cleans up its pending timer on unmount', () => {
  vi.useFakeTimers();
  const { unmount } = renderHook(() => useDebounce('value', 100));
  expect(vi.getTimerCount()).toBe(1);
  unmount();
  expect(vi.getTimerCount()).toBe(0);
});
