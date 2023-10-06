import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'

describe('lifecycle methods', () => {
  test('mounted assigns internal', () => {
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.interval).not.toBe(undefined)
  })

  test('counter works', () => {
    jest.useFakeTimers()
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.counter).toBe(0)
    jest.advanceTimersByTime(1000)
    expect(wrapper.vm.counter).toBe(1)
    jest.advanceTimersByTime(1000)
    expect(wrapper.vm.counter).toBe(2)
  })

  test('instance gets destroyed', () => {
    const beforeDestroyedMethods = jest.spyOn(AlertMessage, 'beforeDestroy')
    const wrapper = mount(AlertMessage)
    wrapper.vm.counter = wrapper.vm.timer - 1
    jest.advanceTimersByTime(1000)
    expect(beforeDestroyedMethods).toHaveBeenCalled()
  })
})
