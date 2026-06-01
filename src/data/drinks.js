/**
 * 饮品品牌及热量数据
 *
 * ⚠️ 重要提示：所有热量数据均为估算值，仅供参考！
 * 热量单位：千卡（kcal）/ 杯
 * 数据基于行业通用配方估算（中杯为基准）
 * 实际热量因糖量选择、配料增减、杯型大小、门店配方差异会有较大浮动
 *
 * calMin：去糖/去小料后的最低估算值
 * calMax：全糖/加小料后的最高估算值
 * calMid：标准糖/标准配方的中间估算值（用于排序和等级判定）
 *
 * 菜单来源：各品牌官方小程序/外卖平台/公开报道（2025年）
 */

const drinksData = [
  // ==================== 1. 喜茶 ====================
  {
    id: 'heytea',
    name: '喜茶',
    logo: '🧋',
    color: '#1a1a1a',
    drinks: [
      { id: 'ht01', name: '多肉葡萄', calMin: 240, calMid: 365, calMax: 480, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['人气TOP'], note: '手剥葡萄+芝士奶盖' },
      { id: 'ht02', name: '芝芝莓莓', calMin: 210, calMid: 330, calMax: 440, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['人气TOP'], note: '草莓+芝士奶盖' },
      { id: 'ht03', name: '烤黑糖波波牛乳', calMin: 320, calMid: 450, calMax: 580, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['高热量警告'], note: '黑糖珍珠+牛乳' },
      { id: 'ht04', name: '满杯红柚', calMin: 120, calMid: 180, calMax: 250, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['低卡推荐'], note: '整颗红柚果肉' },
      { id: 'ht05', name: '羽衣纤体瓶', calMin: 80, calMid: 140, calMax: 200, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['低卡推荐'], note: '羽衣甘蓝+苹果+柠檬' },
      { id: 'ht06', name: '纯绿妍', calMin: 3, calMid: 15, calMax: 35, size: '500ml', category: '纯茶', sugar: '无糖', tags: ['几乎零卡'], note: '纯茶无添加' },
      { id: 'ht07', name: '喜柿多多', calMin: 160, calMid: 260, calMax: 350, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['季节限定'], note: '柿子+茉莉花茶' },
      { id: 'ht08', name: '鸭喜香柠檬茶', calMin: 100, calMid: 160, calMax: 220, size: '500ml', category: '柠檬茶', sugar: '标准糖', tags: ['清爽'], note: '鸭屎香茶底+香水柠檬' },
    ],
  },

  // ==================== 2. 奈雪的茶 ====================
  {
    id: 'nayuki',
    name: '奈雪的茶',
    logo: '🍑',
    color: '#e83e8c',
    drinks: [
      { id: 'ny01', name: '霸气杨枝甘露', calMin: 260, calMid: 380, calMax: 490, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['人气TOP'], note: '芒果+西柚+椰奶' },
      { id: 'ny02', name: '霸气手捣柠檬茶', calMin: 90, calMid: 150, calMax: 220, size: '500ml', category: '柠檬茶', sugar: '标准糖', tags: ['人气TOP'], note: '手捣香水柠檬' },
      { id: 'ny03', name: '茉莉初雪', calMin: 3, calMid: 15, calMax: 35, size: '500ml', category: '纯茶', sugar: '无糖', tags: ['几乎零卡'], note: '茉莉花茶纯茶' },
      { id: 'ny04', name: '霸气不加糖黑葡萄', calMin: 140, calMid: 210, calMax: 290, size: '500ml', category: '果茶', sugar: '无糖', tags: ['低卡推荐'], note: '不加糖·黑葡萄+茉莉茶' },
      { id: 'ny05', name: '金色山脉珍珠奶茶', calMin: 240, calMid: 350, calMax: 450, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '金色山脉红茶+珍珠' },
      { id: 'ny06', name: '瘦瘦小绿瓶', calMin: 70, calMid: 130, calMax: 190, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['低卡推荐'], note: '羽衣甘蓝+苹果' },
      { id: 'ny07', name: '霸气西瓜', calMin: 100, calMid: 180, calMax: 260, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['清爽', '季节限定'], note: '新鲜西瓜+茉莉茶' },
      { id: 'ny08', name: '66颗蓝莓桑葚酸奶昔', calMin: 220, calMid: 320, calMax: 420, size: '500ml', category: '奶昔', sugar: '标准糖', tags: ['热门'], note: '蓝莓+桑葚+酸奶' },
    ],
  },

  // ==================== 3. 蜜雪冰城 ====================
  {
    id: 'mixue',
    name: '蜜雪冰城',
    logo: '👑',
    color: '#e60012',
    drinks: [
      { id: 'mx01', name: '冰鲜柠檬水', calMin: 50, calMid: 120, calMax: 180, size: '660ml', category: '果茶', sugar: '标准糖', tags: ['招牌', '低卡推荐'], note: '年销4亿杯·性价比之王' },
      { id: 'mx02', name: '珍珠奶茶', calMin: 240, calMid: 350, calMax: 460, size: '660ml', category: '奶茶', sugar: '标准糖', tags: ['经典'], note: '经典珍珠奶茶' },
      { id: 'mx03', name: '芝士奶盖四季春', calMin: 200, calMid: 300, calMax: 400, size: '660ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '四季春茶+芝士奶盖' },
      { id: 'mx04', name: '草莓摇摇奶昔', calMin: 200, calMid: 310, calMax: 420, size: '500ml', category: '奶昔', sugar: '标准糖', tags: ['热门'], note: '冰淇淋+草莓酱' },
      { id: 'mx05', name: '满杯百香果', calMin: 100, calMid: 180, calMax: 260, size: '660ml', category: '果茶', sugar: '标准糖', tags: ['清爽'], note: '百香果+椰果+珍珠' },
      { id: 'mx06', name: '芋圆奶茶', calMin: 270, calMid: 390, calMax: 500, size: '660ml', category: '奶茶', sugar: '标准糖', tags: ['高热量警告'], note: '芋圆+奶茶' },
      { id: 'mx07', name: '茉莉奶绿', calMin: 170, calMid: 260, calMax: 350, size: '660ml', category: '奶茶', sugar: '标准糖', tags: ['清爽'], note: '茉莉花茶+奶绿' },
      { id: 'mx08', name: '雪王雪顶咖啡', calMin: 110, calMid: 180, calMax: 250, size: '500ml', category: '咖啡', sugar: '标准糖', tags: ['热门'], note: '咖啡+冰淇淋' },
    ],
  },

  // ==================== 4. 茶百道 ====================
  {
    id: 'chapanda',
    name: '茶百道',
    logo: '🐼',
    color: '#4a90d9',
    drinks: [
      { id: 'cp01', name: '杨枝甘露', calMin: 220, calMid: 340, calMax: 450, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['人气TOP'], note: '招牌必点' },
      { id: 'cp02', name: '铁观音奶冻', calMin: 150, calMid: 250, calMax: 340, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '铁观音茶底+奶冻' },
      { id: 'cp03', name: '豆乳玉麒麟', calMin: 280, calMid: 400, calMax: 520, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '豆乳奶盖+玉麒麟茶底' },
      { id: 'cp04', name: '茉莉奶绿', calMin: 160, calMid: 260, calMax: 350, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '茉莉花茶底' },
      { id: 'cp05', name: '青提茉莉', calMin: 130, calMid: 210, calMax: 290, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['清爽'], note: '青提+茉莉花茶' },
      { id: 'cp06', name: '西瓜啵啵', calMin: 100, calMid: 170, calMax: 240, size: '700ml', category: '果茶', sugar: '标准糖', tags: ['清爽'], note: '西瓜+脆啵啵' },
      { id: 'cp07', name: '超级杯水果茶', calMin: 120, calMid: 190, calMax: 270, size: '1L', category: '果茶', sugar: '标准糖', tags: ['低卡推荐', '超大杯'], note: '多种鲜果+茉莉茶' },
      { id: 'cp08', name: '黑糖珍珠奶茶', calMin: 290, calMid: 410, calMax: 520, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['高热量警告'], note: '黑糖+珍珠' },
    ],
  },

  // ==================== 5. 一点点 ====================
  {
    id: 'yidiandian',
    name: '一点点',
    logo: '🟢',
    color: '#4caf50',
    drinks: [
      { id: 'yd01', name: '四季奶青', calMin: 210, calMid: 320, calMax: 420, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '四季春茶底+奶茶' },
      { id: 'yd02', name: '波霸奶茶', calMin: 260, calMid: 380, calMax: 490, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '大珍珠·10道工法煮制' },
      { id: 'yd03', name: '红茶玛奇朵', calMin: 230, calMid: 350, calMax: 460, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '红茶+奶盖·一杯两喝' },
      { id: 'yd04', name: '冰淇淋红茶', calMin: 200, calMid: 300, calMax: 400, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '红茶+冰淇淋球' },
      { id: 'yd05', name: '柠檬养乐多', calMin: 100, calMid: 170, calMax: 240, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['清爽', '低卡推荐'], note: '养乐多+柠檬汁' },
      { id: 'yd06', name: '乌龙奶茶', calMin: 180, calMid: 290, calMax: 380, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['经典'], note: '冻顶乌龙茶底' },
      { id: 'yd07', name: '养乐多绿', calMin: 120, calMid: 190, calMax: 260, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['清爽'], note: '养乐多+茉莉绿茶' },
      { id: 'yd08', name: '阿华田', calMin: 290, calMid: 410, calMax: 530, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['高热量警告'], note: '阿华田+奶茶' },
    ],
  },

  // ==================== 6. CoCo都可 ====================
  {
    id: 'coco',
    name: 'CoCo都可',
    logo: '🥤',
    color: '#ff6b35',
    drinks: [
      { id: 'cc01', name: '鲜百香双响炮', calMin: 150, calMid: 240, calMax: 330, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['人气TOP', '招牌'], note: '百香果+珍珠+椰果·畅销17年' },
      { id: 'cc02', name: '奶茶三兄弟', calMin: 290, calMid: 410, calMax: 520, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '珍珠+布丁+仙草' },
      { id: 'cc03', name: '芒果绿茶', calMin: 110, calMid: 180, calMax: 250, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['低卡推荐'], note: '芒果+绿茶' },
      { id: 'cc04', name: '葡萄柚果粒茶', calMin: 130, calMid: 200, calMax: 280, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['清爽'], note: '葡萄柚+绿茶' },
      { id: 'cc05', name: '珍珠奶茶', calMin: 250, calMid: 360, calMax: 470, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['经典'], note: '经典珍珠奶茶' },
      { id: 'cc06', name: '双倍鲜芋奶绿', calMin: 240, calMid: 350, calMax: 460, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '鲜芋+茉莉奶绿' },
      { id: 'cc07', name: '生椰杨枝甘露', calMin: 230, calMid: 340, calMax: 450, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['热门'], note: '生椰+芒果+西柚' },
      { id: 'cc08', name: '绿豆沙牛乳', calMin: 180, calMid: 280, calMax: 380, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['清爽', '季节限定'], note: '绿豆沙+鲜奶' },
    ],
  },

  // ==================== 7. 瑞幸咖啡 ====================
  {
    id: 'luckin',
    name: '瑞幸咖啡',
    logo: '🦌',
    color: '#1a2b5c',
    drinks: [
      { id: 'lk01', name: '生椰拿铁', calMin: 160, calMid: 220, calMax: 300, size: '400ml', category: '咖啡', sugar: '标准糖', tags: ['人气TOP'], note: '生椰乳+浓缩咖啡' },
      { id: 'lk02', name: '厚乳拿铁', calMin: 180, calMid: 260, calMax: 350, size: '400ml', category: '咖啡', sugar: '标准糖', tags: ['人气TOP'], note: '厚牛乳+浓缩' },
      { id: 'lk03', name: '橙C美式', calMin: 40, calMid: 80, calMax: 120, size: '400ml', category: '咖啡', sugar: '无糖', tags: ['低卡推荐'], note: '橙汁+美式咖啡' },
      { id: 'lk04', name: '生椰杨枝甘露', calMin: 230, calMid: 340, calMax: 450, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '生椰+芒果+西柚' },
      { id: 'lk05', name: '美式(无糖)', calMin: 3, calMid: 10, calMax: 20, size: '400ml', category: '咖啡', sugar: '无糖', tags: ['几乎零卡'], note: '纯美式咖啡' },
      { id: 'lk06', name: '拿铁(无糖)', calMin: 120, calMid: 160, calMax: 200, size: '400ml', category: '咖啡', sugar: '无糖', tags: ['轻卡'], note: '牛奶+浓缩' },
      { id: 'lk07', name: '葡萄冰萃美式', calMin: 70, calMid: 130, calMax: 180, size: '400ml', category: '咖啡', sugar: '标准糖', tags: ['清爽'], note: '葡萄+气泡美式' },
      { id: 'lk08', name: '陨石拿铁', calMin: 180, calMid: 280, calMax: 380, size: '400ml', category: '咖啡', sugar: '标准糖', tags: ['高热量警告'], note: '黑糖晶球+拿铁' },
    ],
  },

  // ==================== 8. 星巴克 ====================
  {
    id: 'starbucks',
    name: '星巴克',
    logo: '⭐',
    color: '#00704a',
    drinks: [
      { id: 'sb01', name: '拿铁(中杯)', calMin: 130, calMid: 190, calMax: 250, size: '355ml', category: '咖啡', sugar: '无糖', tags: ['经典'], note: '浓缩咖啡+牛奶' },
      { id: 'sb02', name: '美式(中杯)', calMin: 3, calMid: 10, calMax: 20, size: '355ml', category: '咖啡', sugar: '无糖', tags: ['几乎零卡'], note: '纯美式' },
      { id: 'sb03', name: '抹茶星冰乐', calMin: 260, calMid: 380, calMax: 500, size: '355ml', category: '星冰乐', sugar: '标准糖', tags: ['热量炸弹'], note: '人气第一名·2025年减糖30%' },
      { id: 'sb04', name: '摩卡可可碎片星冰乐', calMin: 290, calMid: 420, calMax: 540, size: '355ml', category: '星冰乐', sugar: '标准糖', tags: ['热量炸弹'], note: '摩卡+可可碎片+奶油' },
      { id: 'sb05', name: '红茶拿铁', calMin: 130, calMid: 200, calMax: 280, size: '355ml', category: '咖啡', sugar: '标准糖', tags: ['热门'], note: '红茶+牛奶·人气第三名' },
      { id: 'sb06', name: '冰摇红莓黑加仑茶', calMin: 60, calMid: 120, calMax: 180, size: '355ml', category: '果茶', sugar: '标准糖', tags: ['低卡推荐'], note: '人气第二名' },
      { id: 'sb07', name: '冰摇柠檬茶', calMin: 60, calMid: 120, calMax: 180, size: '355ml', category: '柠檬茶', sugar: '标准糖', tags: ['清爽'], note: '柠檬汁+红茶' },
      { id: 'sb08', name: '焦糖玛奇朵(中杯)', calMin: 180, calMid: 260, calMax: 350, size: '355ml', category: '咖啡', sugar: '标准糖', tags: ['热门'], note: '焦糖+牛奶+浓缩' },
    ],
  },

  // ==================== 9. 古茗 ====================
  {
    id: 'guming',
    name: '古茗',
    logo: '🍵',
    color: '#8B4513',
    drinks: [
      { id: 'gm01', name: '超A芝士葡萄', calMin: 200, calMid: 320, calMax: 430, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['人气TOP'], note: '夏黑葡萄+芝士奶盖' },
      { id: 'gm02', name: '大叔奶茶', calMin: 280, calMid: 400, calMax: 520, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP', '招牌'], note: '黑糖+红豆+布丁+珍珠·镇店之宝' },
      { id: 'gm03', name: '云深幽兰', calMin: 230, calMid: 350, calMax: 460, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '锡兰红茶+鲜奶+碧根果碎' },
      { id: 'gm04', name: '杨枝甘露轻盈版', calMin: 180, calMid: 280, calMax: 370, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['低卡推荐'], note: '低卡版杨枝甘露' },
      { id: 'gm05', name: '龙井香青团', calMin: 230, calMid: 350, calMax: 460, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['季节限定'], note: '龙井茶+艾草青团' },
      { id: 'gm06', name: '云岭茉莉白', calMin: 150, calMid: 240, calMax: 330, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['清爽'], note: '七窨茉莉花茶+鲜奶' },
      { id: 'gm07', name: '百香双重奏', calMin: 100, calMid: 170, calMax: 240, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['清爽'], note: '百香果+气泡水' },
      { id: 'gm08', name: '布蕾脆脆奶芙', calMin: 300, calMid: 420, calMax: 540, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['高热量警告'], note: '布蕾+奶芙+碧根果' },
    ],
  },

  // ==================== 10. 霸王茶姬 ====================
  {
    id: 'bawang',
    name: '霸王茶姬',
    logo: '🌸',
    color: '#d4a574',
    drinks: [
      { id: 'bw01', name: '伯牙绝弦', calMin: 180, calMid: 280, calMax: 370, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP', '招牌'], note: '茉莉雪芽+鲜奶·常年Top1' },
      { id: 'bw02', name: '花田乌龙', calMin: 160, calMid: 260, calMax: 350, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '白桃乌龙+鲜奶' },
      { id: 'bw03', name: '桂馥兰香', calMin: 150, calMid: 250, calMax: 340, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '桂花乌龙+鲜奶·秋冬治愈' },
      { id: 'bw04', name: '山野栀子', calMin: 130, calMid: 220, calMax: 300, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['清爽', '低卡推荐'], note: '栀子绿茶+鲜奶·清爽低卡' },
      { id: 'bw05', name: '万里木兰', calMin: 170, calMid: 270, calMax: 360, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '武夷红茶+鲜奶' },
      { id: 'bw06', name: '青青糯山', calMin: 150, calMid: 240, calMax: 320, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['清爽'], note: '糯米香绿茶+鲜奶' },
      { id: 'bw07', name: '白雾红尘', calMin: 180, calMid: 280, calMax: 370, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '大红袍+鲜奶' },
      { id: 'bw08', name: '寻香山茶', calMin: 160, calMid: 260, calMax: 350, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '山茶花+鲜奶' },
    ],
  },

  // ==================== 11. 树夏 ====================
  {
    id: 'shuxia',
    name: '树夏',
    logo: '🌳',
    color: '#5b8c5a',
    drinks: [
      { id: 'sx01', name: '树夏草莓', calMin: 180, calMid: 290, calMax: 390, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['招牌'], note: '新鲜草莓+茉莉花茶' },
      { id: 'sx02', name: '黄金榴莲', calMin: 280, calMid: 420, calMax: 550, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['高热量警告'], note: '榴莲果肉+鲜奶·推荐三分糖' },
      { id: 'sx03', name: '牛油果奶茶', calMin: 220, calMid: 330, calMax: 430, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '牛油果+鲜奶·绵密顺滑' },
      { id: 'sx04', name: '多肉绿葡萄', calMin: 150, calMid: 250, calMax: 340, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['清爽'], note: '鲜打绿葡萄+茉莉茶' },
      { id: 'sx05', name: '生椰冻奶茶', calMin: 240, calMid: 350, calMax: 460, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['热门'], note: '椰乳+椰奶冻+黑糖珍珠+炒米' },
      { id: 'sx06', name: '杨枝甘露', calMin: 230, calMid: 340, calMax: 450, size: '500ml', category: '果茶', sugar: '标准糖', tags: ['热门'], note: '芒果+西柚+椰奶·用料扎实' },
      { id: 'sx07', name: '馥桂龙眼白月光', calMin: 170, calMid: 270, calMax: 360, size: '500ml', category: '奶茶', sugar: '标准糖', tags: ['人气TOP'], note: '云雾金桂茶+鲜奶+龙眼' },
      { id: 'sx08', name: '奇亚籽羽衣甘蓝牛油果酸奶', calMin: 130, calMid: 210, calMax: 290, size: '500ml', category: '奶昔', sugar: '标准糖', tags: ['低卡推荐'], note: '健康轻体·燕麦爆珠' },
    ],
  },
];

/** 热量等级：使用中间值 calMid 判定 */
export function getCalorieLevel(calMid) {
  if (calMid < 50) return { level: '几乎零卡', class: 'cal-super-low', color: '#22c55e' };
  if (calMid < 200) return { level: '低卡', class: 'cal-low', color: '#4ade80' };
  if (calMid < 350) return { level: '中等', class: 'cal-mid', color: '#f59e0b' };
  if (calMid < 450) return { level: '偏高', class: 'cal-high', color: '#f97316' };
  return { level: '热量炸弹', class: 'cal-super-high', color: '#ef4444' };
}

/** 所有品类 */
export const categories = ['全部', '果茶', '奶茶', '咖啡', '纯茶', '柠檬茶', '星冰乐', '奶昔', '冰淇淋'];

/** 对比参考：一碗米饭约 200 kcal，一个汉堡约 500 kcal */
export const referenceCalories = {
  rice: 200,
  hamburger: 500,
  coke: 140,
};

export default drinksData;
