import {mount} from '@vue/test-utils'
import numbers from '../../src/components/numbers'

describe('check for numbers',()=>{
    it('checks if numbers aer odd or even',()=>{
        const wrapper = mount(numbers);
        expect(wrapper.text()).toBe("2,4,6,8");
    });
})