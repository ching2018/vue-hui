<template>
    <hui-card>
        <div name="header">{{title}}</div>
        <div name="content">
            <div class="image-list">
                <div class="image" v-for="(image, $index) in _images">
                    <img :src="image">
                    <span class="vmc-badge" @click="_sliceImages($index)">x</span>
                </div>
                <div class="vmc-upload" v-if="!input" @click="_upload">
                    <slot>
                        <div class="vmc-upload-button">
                            <i class="icono-plus"></i>
                        </div>
                    </slot>
                </div>
                <div class="vmc-upload" v-if="input">
                    <slot>
                        <div class="vmc-upload-button">
                            <i class="icono-plus"></i>
                        </div>
                    </slot>
                    <input v-if="input" type="file" class="fileInput" :name="name" :accept="accept" :multiple="multiple" @change="_onChange">
                </div>
            </div>
        </div>
    </hui-card>
</template>
<script>
import Card from '../../card/src/card.vue';

export default {
    name: 'hui-upload',
    extends: Card,
    props: {
        title: {
            default: '请上传图片'
        },
        upload: {
            type: Function,
            default: function() {
                console.log('未传入函数');
            }
        },
        images: Array,
        url: {
            type: String
        },
        name: {
            type: String
        },
        accept: {
            type: String,
            default: 'image/*'
        },
        body: {
            type: Object,
            default: () => {}
        },
        multiple: Boolean,
        autoReset: Boolean,
        validator: Function,
        input: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            _images: this.images
        }
    },
    methods: {
        _upload() {
            this.upload();
        },
        _sliceImages(index) {
            _images.splice(index, 1);
            this.$emit('on-slice', _images, e);
        },
        _onChange() {
            var files = this.$el.querySelector('input[type=file]').files;
            if (!files.length) return;

            this._uploadFile(files);
        },
        _uploadFile(files) {
            var fd = new FormData();

            for (let name in this.body) {
                if (!this.body.hasOwnProperty(name)) continue;

                let value = this.body[name];
                fd.append(name, value);
            }

            var filename = this.name;
            for (let i = 0, len = files.length; i < len; i++) {
                let file = files[i];

                if (typeof this.validator === 'function') {
                    var allow = this.validator(file.name, file.type, file.size);
                    if (!allow) return;
                }

                fd.append(filename, files[i]);
            }

            var xhr = new XMLHttpRequest();
            xhr.upload.addEventListener('progress', this._onProgress, false);
            xhr.addEventListener('load', this._onSuccess, false);
            xhr.addEventListener('error', this._onError, false);
            xhr.open('POST', this.url);
            xhr.send(fd);
        },
        _onProgress(e) {
            if (e.lengthComputable) {
                var percentCompleted = Math.round(e.loaded * 100 / e.total);
                percentCompleted = percentCompleted.toString() + '%';

                this.$emit('on-progress', percentCompleted);
            }
        },
        _onSuccess(e) {
            var res = e.target.responseText;
            try {
                res = JSON.parse(res)
            } catch (e) {}

            if (this.autoReset) {
                this._clearInputFile();
            }
            _images.push(res);
            this.$emit('on-success', res, e);
        },
        _onError(e) {
            this.$emit('on-error', e);
        },
        _clearInputFile() {
            var fileInput = this.$el.querySelector('input[type=file]');
            if (fileInput.value) {
                try {
                    fileInput.value = '';
                } catch (e) {}

                if (fileInput.value) {
                    var form = document.createElement('form'),
                        brother = fileInput.nextSibling,
                        parent = fileInput.parentNode;

                    form.appendChild(fileInput);
                    form.reset();
                    parent.insertBefore(fileInput, brother);
                }
            }
        }
    }
}
</script>
<style lang="less">
@import '../../../styles/components/upload.less';
</style>
