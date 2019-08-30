import { MENU_ITEM_CLICK_TAG_ACTION } from './actionTypes';

let defaultState = {
    menuList: [
        {"parentId": 1, "name": "dashboard", "icon":"dashboard", "child": [
                {"childId": 7, "name": "分析页", "url":"/analyse"},
                {"childId": 8,  "name": "监控页", "url":"/monitoring"},
                {"childId": 9,  "name": "工作台", "url":"/workbench"}
            ]},
        {"parentId": 2, "name": "表单页", "icon":"form", "child": [
                {"childId": 10, "name": "基础表单", "url":"/baseTable"},
                {"childId": 11, "name": "分布表单", "url":"/distributionTable"},
                {"childId": 12, "name": "高级表单", "url":"/scatterTable"}
            ]},
        {"parentId": 3, "name": "列表页", "icon":"table", "child": [
                {"childId": 13, "name": "查询表格", "url":"/queryList"},
                {"childId": 14, "name": "标准列表", "url":"/standardList"},
                {"childId": 15, "name": "卡片列表", "url":"/cardList"},
                {"childId": 16, "name": "搜索列表", "url":"/searchList"}
            ]},
        {"parentId": 4, "name": "详情页", "icon":"profile", "child": [
                {"childId": 17, "name": "基础详情页", "url":"/baseDetail"},
                {"childId": 18, "name": "高级详情页", "url":"/highDetail"},
            ]},
        {"parentId": 5, "level":1, "name": "结果页", "icon":"check-circle-o", "child": [
                {"childId": 19, "name": "成功", "url":"/success"},
                {"childId": 20, "name": "失败", "url":"/fail"}
            ]},
        {"parentId": 6, "name": "异常页", "icon":"warning", "child": [
                {"childId": 21, "name": "403", "url":"/403"},
                {"childId": 22, "name": "404", "url":"/404"},
                {"childId": 23, "name": "500", "url":"/500"}
            ]}
    ],
    collapsed: false,
    openKeys: ['1'],
    // tags
    breadcrumbTags: ["dashboard","分析页"]
}

export default (state = defaultState, action) => {
    if (action.type === MENU_ITEM_CLICK_TAG_ACTION) {
        console.log(state,action);
        let newState = JSON.parse(JSON.stringify(state));
        newState.breadcrumbTags = action.breadcrumbTags;
        return newState;
    }
    return state;
}