import {mount} from '@vue/test-utils'
import Submit from '../../src/components/submit'

describe('submit button test',()=>{
    it('display none authorized message',()=>{
        const msg = 'submit'
        const wrapper = mount(Submit,{
            props:{
                msg:msg
            }
        });
        console.log(wrapper.html())
        expect(wrapper.find("span").text()).toBe("Admin priviledge");
        expect(wrapper.find("button").text()).toBe("submit")
    });
});