import { MENU_ITEM_CLICK_TAG_ACTION } from './actionTypes';

export const getBreadcrumbTags = (parentName, childName) => ({
    type: MENU_ITEM_CLICK_TAG_ACTION,
    breadcrumbTags: [parentName, childName]
});