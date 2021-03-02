<template>
  <div class="shouye">
    <img :src="require('@/assets/img/title/title.jpg')"
         alt="">
    <div class="shouye-container">
      <div class="shouye-box">
        <div class="shouye-border-box">
          <div class="user-info">
            <img :src="require('@/assets/img/index/user_pic.png')"
                 alt="">
            <div class="user-info-box">
              <div class="user-info-name clear">
                <h3>潮流墨迹2</h3>
                <span @click="toShowLevelRule">查看等级规则</span>
              </div>
              <div class="user-info-detail clear">
                <div>
                  <span></span>
                  <div>
                    <p>参照您2020.11月至今所达到过的最高等级，2021.2.11-2021.3.31保级期间，只升不降(违规除外)。</p>
                    <p>保级结束后，将按以下数据恢复正常等级考核，根据实际推广数据您当前应为初级，供参考。<span>查看详情</span></p>
                  </div>
                </div>
                <p>每日推广数据将于第二天24点前更新</p>
              </div>
            </div>
          </div>
          <div class="target-info">
            <ul class="progress-box">
              <li>
                <el-progress type="circle"
                             :percentage="100"
                             color="rgb(138, 198, 66)"
                             width="128">
                  <div class="progress-status">达成</div>
                  <var class="progress-target">（目标{{shouye.yinliu_people_target}}人）</var>
                </el-progress>
                <p>引流人数<el-tooltip placement="top"
                              effect="light"
                              :visible-arrow="false">
                    <template #content>
                      近30天引流人数：指的是近30天通<br />过您的推广链接或者淘口令，进入到<br />商品/店铺详情页的人（如：一天内<br />同一人多次点击只能算一个人；一个<br />用户第一天点击，第二天又点击算2<br />个人）。
                    </template>
                    <span class="iconfont">&#xe604;</span>
                  </el-tooltip>
                </p>
              </li>
              <li>
                <el-progress type="circle"
                             :percentage="100"
                             color="rgb(138, 198, 66)"
                             width="128">
                  <div class="progress-status">达成</div>
                  <var class="progress-target">（目标{{shouye.chengjiao_people_target}}人）</var>
                </el-progress>
                <p>成交人数<el-tooltip placement="top"
                              effect="light"
                              :visible-arrow="false">
                    <template #content>
                      近30天付款的人数，同个买家账号<br />近30天去重（不包含未支付尾款的<br />预售订单成交人数
                    </template>
                    <span class="iconfont">&#xe604;</span>
                  </el-tooltip>
                </p>
              </li>
              <li>
                <el-progress type="circle"
                             :percentage="100"
                             color="rgb(138, 198, 66)"
                             width="128">
                  <div class="progress-status">达成</div>
                  <var class="progress-target">（目标{{shouye.order_amount_target}}元）</var>
                </el-progress>
                <p>有效订单金额<el-tooltip placement="top"
                              effect="light"
                              :visible-arrow="false">
                    <template #content>
                      30天内有效订单金额=近30天创建<br />并支付成功淘宝客订单的付款金额<br />（不包含未支付尾款的预售订单金<br />额）-近30天维权创建及维权成功淘<br />宝客订单中的退款金额。
                    </template>
                    <span class="iconfont">&#xe604;</span>
                  </el-tooltip><strong>查看订单</strong></p>
              </li>
            </ul>
            <div class="gray-container">
              <div class="member-title">会员特权</div>
              <ul class="icon-info">
                <li>
                  <span class="iconfont">&#xe6cf;</span>
                  <var>搜索</var>
                </li>
                <li>
                  <span class="iconfont">&#xe602;</span>
                  <var>明细报表</var>
                </li>
                <li>
                  <span class="iconfont">&#xe605;</span>
                  <var>快捷提现</var>
                </li>
                <li>
                  <span class="iconfont"
                        style="font-size: 16px;">&#xe687;</span>
                  <var>链接转换</var>
                </li>
                <li>
                  <span class="iconfont">&#xe606;</span>
                  <var>收藏夹</var>
                </li>
                <li>
                  <span class="iconfont"
                        style="font-size: 16px;">&#xe619;</span>
                  <var>高等佣金</var>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 预估收入 -->
        <div class="estimated-revenue">
          <h3>预估收入</h3>
          <ul>
            <li>
              <var>昨日预估收入<el-tooltip placement="top"
                            effect="light"
                            :visible-arrow="false">
                  <template #content>
                    昨天确认收货的预估收入数据。该收入仅<br />为阿里妈妈对过滤前的预估数据展示，非<br />为您的实际收入金额，最终结算金额以月<br />结后您的账户内实际收到的金额为准。
                  </template>
                  <i class="iconfont">&#xe604;</i>
                </el-tooltip></var>
              <span><strong>{{shouye.yesterday_amount_big}}</strong>.{{shouye.yesterday_amount_small}}元</span>
            </li>
            <li>
              <var>本月预估收入<el-tooltip placement="top"
                            effect="light"
                            :visible-arrow="false">
                  <template #content>
                    一个自然月内，就是当月1号到昨天为止<br />（不包含今日收入）的已经确认收货的预<br />估收入数据。该收入仅为阿里妈妈过滤前<br />的预估数据展示，非为您的实际收入金额<br />，最终结算金额以月结后您的账户内实际<br />收到的金额为准。
                  </template>
                  <i class="iconfont">&#xe604;</i>
                </el-tooltip></var>
              <span><strong>{{shouye.this_month_big}}</strong>.{{shouye.this_month_small}}元</span>
            </li>
            <li>
              <var>上月预估收入<el-tooltip placement="top"
                            effect="light"
                            :visible-arrow="false">
                  <template #content>
                    指上一个自然月的预估收入数据。该收入<br />仅为阿里妈妈过两次钱的预估数据展示，<br />非为您的实际收入金额，最终结算金额以<br />月结后您账户内实际收到的金额为准。
                  </template>
                  <i class="iconfont">&#xe604;</i>
                </el-tooltip></var>
              <span><strong>{{shouye.last_month_big}}</strong>.{{shouye.last_month_small}}元</span>
            </li>
          </ul>
        </div>
        <!-- 推广效果 -->
        <div class="promotion-effect">
          <div class="clear">
            <h3>推广效果</h3>
            <span>查看更多数据</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { shouye } from '@/config/accountInfo.js'
export default {
  name: 'shouye',
  components: {

  },
  data() {
    return {
      shouye: shouye
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {

  },
  methods: {
    toShowLevelRule() {
      window.open('https://pub.alimama.com/manage/user/new_privilege.htm?spm=a219t.11816994.1998910419.d8b129b33.605f75a5O2LR12')
    }
  },
  watch: {

  }
}
</script>
<style lang="less" scoped>
@import "~@/style/common";
.shouye {
  padding: 14px;
  box-sizing: border-box;
  > img {
    display: block;
    width: 100%;
    height: 80px;
    background-position: top;
    background-size: cover;
    border-radius: 4px;
  }
  .shouye-container {
    min-height: 460px;
    margin: 14px 0 0;
    padding: 50px 24px 24px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    .shouye-box {
      .shouye-border-box {
        border: 1px solid #e2e2e9;
        .user-info {
          display: flex;
          padding: 20px;
          background: url("~@/assets/img/index/bg.png");
          background-size: cover;
          > img {
            overflow: hidden;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            margin-right: 16px;
            background: #fff;
          }
          .user-info-box {
            flex: 1;
            .user-info-name {
              h3 {
                float: left;
                font-size: 20px;
                color: @fontColor;
                font-weight: normal;
              }
              span {
                float: right;
                font-size: 12px;
                color: @orangeFont;
                cursor: pointer;
              }
            }
            .user-info-detail {
              margin-top: 10px;
              > div {
                float: left;
                > span {
                  float: left;
                  width: 59px;
                  height: 22px;
                  margin-right: 8px;
                  .iconCenter("index/gaoji");
                  background-size: cover;
                }
                div {
                  float: left;
                  padding-top: 5px;
                  p {
                    color: #999;
                    font-size: 12px;
                    line-height: 1.42857;
                    span {
                      color: #666;
                      cursor: pointer;
                    }
                  }
                }
              }
              > p {
                float: right;
                padding-top: 4px;
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
        .target-info {
          margin-top: 20px;
          .progress-box {
            display: flex;
            justify-content: space-evenly;
            li {
              // flex: 1;
              .progress-status {
                margin-bottom: 10px;
                color: rgb(138, 198, 66);
                font-weight: bold;
                font-size: 20px;
              }
              .progress-target {
                color: #666;
                font-size: 12px;
              }
              > p {
                text-align: center;
                font-size: 12px;
                color: @fontColor;
                span {
                  margin-left: 5px;
                  font-size: 13px;
                  cursor: default;
                  color: @fontColor;
                }
                strong {
                  margin-left: 20px;
                  color: @orangeFont;
                  font-weight: normal;
                  cursor: pointer;
                }
              }
            }
          }
          .gray-container {
            padding: 20px;
            margin-top: 20px;
            background: rgb(250, 250, 252);
            .member-title {
              height: 20px;
              font-size: 14px;
              line-height: 20px;
              margin-top: 20px;
              margin-bottom: 20px;
              color: @fontColor;
              text-align: center;
              &:before {
                margin-right: 40px;
                content: "";
                width: 160px;
                height: 2px;
                background: #eaeaea;
                display: inline-block;
              }
              &:after {
                margin-left: 40px;
                content: "";
                width: 160px;
                height: 2px;
                background: #eaeaea;
                display: inline-block;
              }
            }
            .icon-info {
              display: flex;
              padding: 0 20px;
              li {
                flex: 1;
                padding-top: 10px;
                padding-bottom: 7px;
                border-right: 1px solid #e2e2e9;
                background: white;
                &:last-child {
                  border-right: 0;
                }
                span {
                  display: block;
                  text-align: center;
                  line-height: 31px;
                  font-size: 21px;
                }
                var {
                  display: block;
                  text-align: center;
                  line-height: 20px;
                  color: rgb(102, 102, 102);
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      .estimated-revenue {
        margin-top: 40px;
        h3 {
          font-weight: normal;
          font-size: 18px;
          color: @fontColor;
        }
        ul {
          margin-top: 20px;
          display: flex;
          li {
            flex: 0 0 20%;
            var {
              display: block;
              margin-bottom: 20px;
              font-size: 12px;
              color: #999;
              .iconfont {
                font-size: 14px;
                margin-left: 5px;
              }
            }
            span {
              display: block;
              font-size: 12px;
              font-weight: 700;
              color: @fontColor;
              font-family: tahoma;
              strong {
                font-size: 18px;
              }
            }
          }
        }
      }
      .promotion-effect {
        margin-top: 60px;
        > div {
          height: 25px;
          margin-bottom: 20px;
          h3 {
            float: left;
            font-weight: normal;
            font-size: 18px;
            color: @fontColor;
          }
          span {
            float: right;
            color: @orangeFont;
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>