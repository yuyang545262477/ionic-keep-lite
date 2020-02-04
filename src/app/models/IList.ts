export interface IItem {
    readonly id: string; //item唯一id
    content: string; //item内容
    childIds?: string[];//子唯一id
}

export interface IList {
    readonly id: string; //列表唯一id
    header?: string //列表标题
    itemIds: string[]; //列表元素ids
    levelOneItem: IItem[]; //列表实体对象
    levelTwoItem?: IItem[]; //二级列表，实体对象
    isTop: boolean; //是否置顶
    isCollected: boolean; //是否归档
    isEditState: boolean;//是否处于编辑状态
    createTime: number; //创建时间
    editTime: number; //修改时间
    tagId?: string;//标签id

}
