import { Stack } from './stack'

test('stack can add and remove items', () => {
  const s = new Stack<number>()
  s.push(1)
  expect(s.pop()).toEqual(1)
  s.push(2)
  expect(s.pop()).toEqual(2)
})

test('stack can follows first in, last out', () => {
  const s = new Stack<number>()
  s.push(1)
  s.push(2)
  s.push(3)
  expect(s.pop()).toEqual(3)
  expect(s.pop()).toEqual(2)
  expect(s.pop()).toEqual(1)
})

test('peek returns the first element but doesnt pop it', () => {
  const s = new Stack<number>()
  s.push(1)
  s.push(2)
  s.push(3)
  expect(s.peek()).toEqual(3)
  expect(s.pop()).toEqual(3)
  expect(s.peek()).toEqual(2)
  expect(s.pop()).toEqual(2)
  expect(s.peek()).toEqual(1)
  expect(s.pop()).toEqual(1)
})
