import {ITag} from "@models/tap.model";
import {v4 as uuid} from "uuid";

export const updateTagNameByUniKey = (tags: ITag[], uniKey: string, tagName: string): ITag[] => {
    const findIndex = tags.findIndex(value => value.id === uniKey);
    return [
        ...tags.slice(0, findIndex),
        {...tags[findIndex], isEdit: false, name: tagName},
        ...tags.slice(findIndex + 1),
    ];
};


export const updateTagEditByUniKey = (disStatus: boolean, uniKey: string, tags: ITag[]): ITag[] => {
    const findIndex = tags.findIndex(value => value.id === uniKey);
    return [
        ...tags.slice(0, findIndex),
        {...tags[findIndex], isEdit: disStatus},
        ...tags.slice(findIndex + 1),
    ];
};


/*创建标签对象*/
export const createTagLogic = (tagName: string): ITag => ({
    isEdit: false,
    name: tagName,
    id: uuid(),
});
/*删除标签对象*/
export const removeByUniKey = (tagId: string, tags: ITag[]): ITag[] => tags.filter(tag => tag.id !== tagId);

/*修改标签对象
修改标签可编辑状态
修改标签昵称
* */
