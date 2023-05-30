<script>
    import Pagination from '../../../../helper-vue-components/src/Pagintation/BootstrapPagination/Pagination/Component.vue'

    export default {
        mixins: [
            Pagination,
        ],
        props: {
            item_type: {
                type: String,
                default: 'financialintelligence-admin-pagination-item'
            }
        }
    }
</script>
