import template from './dashboard.html'
import Command from '../../range/command'
/**
 * Created by peak on 2017/2/10.
 */
export default {
    template,
    data() {
        return {
            imageUrl: ''
        }
    },
    methods: {
        insertImageUrl() {
            if (!this.imageUrl) {
                return
            }
            this.$parent.execCommand(Command.INSERT_IMAGE, this.imageUrl)
            this.imageUrl = null
        },
        pick() {
            const component = this
            const config = this.$options.module.config
            config.uploadHandler(function(url) {
                if (url) {
                    this.$parent.execCommand(Command.INSERT_IMAGE, url)
                }
            })
        }
    }
}