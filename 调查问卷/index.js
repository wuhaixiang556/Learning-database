Vue.component('ym-one', {
    props: {
        genders: {
            type: Array,
            default: function () {
                return [];
            }
        },
    },
    template: '\
        <div class="wenjuan1"> \
            <slot></slot> \
            <template v-for="(gender,key,index) in genders"> \
               <input type="radio" v-model="radios" :value="key" id="input1"> \
               <label for="key">{{ gender }}</label><br> \
            </template> \
            <button @click="next" class="btn btn-success btn1">下一步</button> \
            <button @click="reset" class="btn btn-info btn1">重置</button> \
        </div>',
    data: function () {
        return {
            radios: '',
            counter: 1
        }
    },
    methods: {
        next: function () {
            this.counter++;
            this.$emit("exis", this.counter);
        },
        reset: function () {
            this.radios = "";
        }
    }
})