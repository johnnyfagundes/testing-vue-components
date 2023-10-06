import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
  test('composeUrl', () => {
    const { composeUrl } = GithubCard.methods
    expect(composeUrl(123)).toBe('https://api.github.com/users/123')
    expect(composeUrl('fredMercury')).toBe('https://api.github.com/users/fredMercury')
  })

  test('fetchData', async () => {
    const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA')
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock
    })

    const wrapper = mount(GithubCard)

    wrapper.vm.composeUrl = jest.fn().mockReturnValue('url')

    await wrapper.vm.fetchData()

    expect(window.fetch).toHaveBeenCalledWith('url')
    expect(jsonMock).toHaveBeenCalled()
    expect(wrapper.vm.data).toBe('GITHUB DATA')

  })
})
