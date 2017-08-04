import { mapActions } from 'vuex';
import { ADD_TOAST_MESSAGE } from 'vuex-toast';

export default {
    methods: {
        ...mapActions({
            addToast: ADD_TOAST_MESSAGE
        }),
        sendNotification(text, type) {
            this.addToast({
                text,
                type,
                dismissAfter: 5000
            });
        }        
    }
}