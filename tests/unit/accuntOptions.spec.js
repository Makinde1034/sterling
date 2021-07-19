import {mount, shallowMount} from '@vue/test-utils'
import accountOPtions from '../../src/components/accountOptions'

describe('account options test ',()=>{
    it('renders user email upon login',()=>{
        const wrapper = shallowMount(accountOPtions)
        expect(wrapper.find('h3').text()).toContain('welcome')
    })
})