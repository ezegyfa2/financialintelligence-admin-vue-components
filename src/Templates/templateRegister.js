export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.financialintelligence_admin_layout = require('./Layout/layout').default
        window.templates.financialintelligence_admin_sidebar = require('./Layout/sidebar').default
        
        window.templates.financialintelligence_admin_edit = require('./edit').default
        window.templates.financialintelligence_admin_index = require('./index').default
    }
}