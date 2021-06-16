<template>
  <b-container  class="blog-wrapper">

    <!-- blogs -->
    <b-row class="blog-list-wrapper">
        <b-col
        v-for="blog in blogList"
        :key="blog.img"
        md="6"
      >
        <b-card
          tag="article"
          no-body
        >
     <!--     <b-link :to="{ name: 'pages-blog-detail', params: { id: blog.id } }">
            <b-img
              :src="blog.img"
              :alt="blog.img.slice(5)"
              class="card-img-top"
            /> 
          </b-link>-->
          <b-card-body>
            <b-card-title>
              <b-link
                :to="{ name: 'pages-blog-detail', params: { id: blog.id } }"
                class="blog-title-truncate text-body-heading"
              >
                {{ blog.title }}
              </b-link>
            </b-card-title>
            <b-media no-body>
              <b-media-aside
                vertical-align="center"
                class="mr-100"
              >
                <b-img
                
                  width="60"
                  :src="blog.avatar"
                />
              </b-media-aside>
              <b-media-body class="mt-50">
                
                <h6  class="text-body ">{{ blog.userFullName }} | {{ blog.blogPosted }}
                </h6>
             
              </b-media-body>
            </b-media>
     
          
            <hr>
            <div class="d-flex justify-content-between align-items-center">
           
                <div class="d-flex align-items-center text-body">
                  <feather-icon
                    icon="MapPinIcon"
                    class="mr-50"
                  />
                  <span class="font-weight-bold"> {{blog.tags}}</span>
                </div>
            
              <b-link
                :to="{ name: 'pages-blog-detail', params: { id: blog.id } }"
                class="font-weight-bold"
              >
                Başvuru Yap
              </b-link>
            </div>
          </b-card-body>
        </b-card>
      </b-col>



   
      <b-col cols="12">
        <!-- pagination -->
        <div class="my-2">
          <b-pagination
            v-model="currentPage"
            align="center"
            :total-rows="rows"
            first-number
            last-number
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon
                icon="ChevronLeftIcon"
                size="18"
              />
            </template>
            <template #next-text>
              <feather-icon
                icon="ChevronRightIcon"
                size="18"
              />
            </template>
          </b-pagination>
        </div>
      </b-col>
    </b-row>

    <!--/ blogs -->

    <!-- sidebar -->
 
    <!--/ sidebar -->
  </b-container>
</template>

<script>
import {
  BRow, BCol, BCard, BFormInput, BCardText, BCardTitle, BMedia, BAvatar, BMediaAside, BMediaBody, BImg, BCardBody, BLink, BBadge, BFormGroup, BInputGroup, BInputGroupAppend, BPagination,
} from 'bootstrap-vue'
import { kFormatter } from '@core/utils/filter'
import ContentWithSidebar from '@core/layouts/components/content-with-sidebar/ContentWithSidebar.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BFormInput,
    BCardText,
    BCardBody,
    BCardTitle,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BLink,
    BBadge,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BImg,
    BPagination,
    ContentWithSidebar,
  },
  data() {
    return {
      search_query: '',
      blogList: [],
      blogSidebar: {},
      currentPage: 1,
      perPage: 1,
      rows: 140,
    }
  },
  created() {
    this.$http.get('/blog/list/data').then(res => { this.blogList = res.data })
    this.$http.get('/blog/list/data/sidebar').then(res => { this.blogSidebar = res.data })
  },
  methods: {
    kFormatter,
    tagsColor(tag) {
      if (tag === 'Quote') return 'light-info'
      if (tag === 'Gaming') return 'light-danger'
      if (tag === 'Fashion') return 'light-primary'
      if (tag === 'Video') return 'light-warning'
      if (tag === 'Food') return 'light-success'
      return 'light-primary'
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-blog.scss';
</style>
