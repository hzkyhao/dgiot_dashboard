<!--
 * @Author: h7ml
 * @Date: 2021-02-02 17:52:06
 * @LastEditTime: 2021-03-15 12:42:33
 * @LastEditors: h7ml
 * @Description: In User Settings Edit
 * @FilePath: \dgiot_dashboard\src\views\equipment_management\platform_overview.vue
-->
<template>
  <div class="platform">
    <el-tabs v-model="activeName">
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="4">
          <el-card class="box-card">
            <el-col :span="12" class="card-left">
              <vab-icon icon="projector-2-fill" />
            </el-col>
            <el-col :span="12" class="card-right">
              <p>项目合计</p>
              <p>{{ project_count }}</p>
            </el-col>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="4">
          <el-card class="box-card">
            <el-col :span="12">
              <vab-icon icon="projector-fill" />
            </el-col>
            <el-col :span="12" class="card-right">
              <p>产品合计</p>
              <p>{{ product_count }}</p>
            </el-col>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="4">
          <el-card class="box-card">
            <el-col :span="12">
              <vab-icon icon="apps-fill" />
            </el-col>
            <el-col :span="12" class="card-right">
              <p>应用合计</p>
              <p>{{ app_count }}</p>
            </el-col>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="4">
          <el-card class="box-card">
            <el-col :span="12">
              <vab-icon icon="device-recover-fill" />
            </el-col>
            <el-col :span="12" class="card-right">
              <p>设备数量</p>
              <p>{{ dev_count }}</p>
            </el-col>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="4">
          <el-card class="box-card">
            <el-col :span="12">
              <vab-icon icon="device-fill" />
            </el-col>
            <el-col :span="12" class="card-right">
              <p>注册数量</p>
              <p>{{ dev_active_count }}</p>
            </el-col>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="4">
          <el-card class="box-card">
            <el-col :span="12">
              <vab-icon icon="bar-chart-2-line" />
            </el-col>
            <el-col :span="12" class="card-right">
              <p>在线数量</p>
              <p>{{ dev_online_count }}</p>
            </el-col>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col
          v-for="item in projectList"
          :key="item.id"
          :xs="12"
          :sm="8"
          :md="8"
          :lg="6"
          :xl="4"
        >
          <el-card class="box-card" shadow="always">
            <div slot="header" class="clearfix">
              <span style="font-weight: bolder">{{ item.title }}</span>
            </div>
            <div class="text item">
              <span>工程单位：</span>
              <span>{{ item.userUnit }}</span>
            </div>
            <div class="text item">
              <span>服务规模：</span>
              <span>{{ item.scale }}</span>
            </div>
            <div class="text item">
              <span>所属行业：</span>
              <span>{{ item.category }}</span>
            </div>
            <div class="text item">
              <span>更新时间：</span>
              <span>
                {{
                  new Date(item.updatedAt).toLocaleDateString() +
                  ' ' +
                  new Date(item.updatedAt).toLocaleTimeString()
                }}
              </span>
            </div>
            <div class="text item" style="float: right">
              <el-button-group>
                <el-button
                  style="margin-right: 3px"
                  size="mini"
                  type="success"
                  @click="Gotoproduct(item)"
                >
                  查看产品
                </el-button>
                <el-button
                  size="mini"
                  type="primary"
                  target="_blank"
                  @click="handleClickVisit(item)"
                >
                  进入登录
                </el-button>
              </el-button-group>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-tab-pane label="统计总览" name="devchart">

      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
  import { batch } from '@/api/Batch/index'
  import {
    Project_count,
    product_count,
    app_count,
    dev_count,
    dev_active_count,
    dev_online_count,
  } from '@/api/Platform/index'
  export default {
    components: {},
    data() {
      return {
        activeName: 'devchart',
        filterBox: 'filterBox-first',
        project_count: '-',
        app_count: '-',
        product_count: '-',
        dev_count: '-',
        dev_active_count: '-',
        dev_online_count: '-',
        projectList: [],
        formInline: {
          starttime: '',
          project: '',
        },
      }
    },
    mounted() {
      this.getProject_count()
      this.getProduct_count()
      this.getApp_count()
      this.getDev_count()
      this.getDev_active_count()
      this.getDev_online_count()
    },
    methods: {
      handleChange() {},
      handleClickVisit(project) {
        const url =
          window.location.origin +
          '/iot/' +
          project.attributes.productIdentifier +
          '#/login'
        window.open(url, '__blank')
      },
      Gotoproduct(project) {
        this.$router.push({
          path: '/product',
          query: {
            project: project.id,
          },
        })
      },
      async getProject_count() {
        const Project_num = await Project_count({
          limit: 0,
          count: 1,
        })
        this.project_count = Project_num.count
      },
      async getProduct_count() {
        const Product_num = await product_count({
          limit: 0,
          count: 1,
        })
        this.product_count = Product_num.count
      },
      async getApp_count() {
        const app_num = await app_count({
          limit: 0,
          count: 1,
        })
        this.app_count = app_num.count
      },
      async getDev_count() {
        const dev_num = await dev_count({
          limit: 0,
          count: 1,
        })
        this.dev_count = dev_num.count || 0
      },
      async getDev_active_count() {
        const dev_active_num = await dev_active_count({
          limit: 0,
          count: 1,
          where: {
            status: 'ACTIVE',
          },
        })
        this.dev_active_count = dev_active_num.count
      },
      async getDev_online_count() {
        const dev_online_num = await dev_online_count({
          limit: 0,
          count: 1,
          where: {
            status: 'ONLINE',
          },
        })
        this.dev_online_count = dev_online_num.count
      },
    },
  }
</script>
<style lang="scss" scoped>
  .platform {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-size: 100%;
    .box-card {
      padding: 5px;
      margin: 5px;
    }
    .card-left {
      font-size: 80px;
      color: white;
    }
    .card-right p:first-child {
      padding: 5px;
      margin: 0px;
      font-weight: bolder;
    }
    .card-right p:last-child {
      padding: 5px;
      margin: 0px;
      font-size: 40px;
      font-weight: bolder;
      color: #8b1515;
    }
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  i {
    display: block !important;
    width: 50px;
    height: 50px;
    margin: auto;
    font-size: 50px !important;
    font-size: 40px;
    color: black;
    transition: all ease-in-out 0.3s;
  }
</style>
