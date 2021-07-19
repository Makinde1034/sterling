import {mount} from '@vue/test-utils'
import signup from '../../src/components/sign_up'

describe('sign up test',()=>{
    it('expects button to contain submit text before form is submitted',async()=>{
        const wrapper = mount(signup);
        expect(wrapper.find("button").text()).toContain("Continue");
        
        await wrapper.find("button").trigger("click");

        expect(wrapper.find("button").text()).toContain("")
    })
})