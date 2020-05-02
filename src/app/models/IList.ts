export interface IItem {
    readonly id: string; //item唯一id
    content: string; //item内容
    childIds: string[];//子唯一id
}

export interface IList {
    readonly id: string; //列表唯一id
    header?: string //列表标题
    l1ids: string[]; //列表元素ids
    l2ids:string[]; //二级元素列表
    l3ids:string[]; //三级元素列表
    items: IItem[]; //列表实体对象
    isTop: boolean; //是否置顶
    isCollected: boolean; //是否归档
    isEditState: boolean;//是否处于编辑状态
    createTime: number; //创建时间
    editTime: number; //修改时间
    tagIds: string[];//标签id
}
