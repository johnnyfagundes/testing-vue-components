import ListComponent from '@/list'
import { shallowMount } from '@vue/test-utils'

test('shallowMount',  async () => {
  const wrapper = await shallowMount(ListComponent, {
    stubs: {
      ListItem: {
        template: `<li>{{movie}}</li>`,
        props: ['movie']
      }
    }
  })
  expect(wrapper).toMatchSnapshot()
})
