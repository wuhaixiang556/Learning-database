Vue.component('ym-two', {
    props: {
        interests: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    template: '\
        <div class="wenjuan1"> \
            <slot></slot> \
            <template v-for="(interest,key,index) in interests"> \
                <input type="checkbox" v-model="checked" :value="key" id="input1"> \
                <label>{{ interest }}</label><br> \
            </template> \
            <button @click="next" class="btn btn-success btn2">下一步</button> \
            <button @click="previous" class="btn btn-info btn2">上一步</button> \
            <button @click="reset" class="btn btn-info btn2">重置</button> \
        </div>',
    data: function () {
        return {
            checked: [""],
            counter: 2
        }
    },
    methods: {
        next: function () {
            this.counter++;
            this.$emit("exis2", this.counter);
        },
        previous: function () {
            this.counter--;
            this.$emit("exis3", this.counter);
        },
        reset: function () {
            this.checked = [""];
        }
    }
})