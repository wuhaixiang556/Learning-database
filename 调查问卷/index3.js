Vue.component('ym-three', {
    template: '\
        <div class="wenjuan1"> \
            <slot></slot> \
            <textarea rows="6" cols="38" placeholder="不少于100字" maxlength="100" v-model="textareas" autofocus="autofocus"></textarea> \
            <button @click="submits" class="btn btn-success btn3">提交</button> \
            <button @click="previous" class="btn btn-info btn3">上一步</button> \
            <button @click="reset" class="btn btn-info btn3">重置</button> \
        </div>',
    data: function () {
        return {
            counter: 3,
            textareas: ""
        }
    },
    methods: {
        submits: function () {
            confirm("是否确认提交？");
        },
        previous: function () {
            this.counter--;
            this.$emit("exis4", this.counter);
        },
        reset: function () {
            this.textareas = "";
        }
    }
})