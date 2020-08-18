
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Tag {
    id: string;
    name: string;
}

export interface IQuery {
    tags(): Tag[] | Promise<Tag[]>;
    todos(): Todo[] | Promise<Todo[]>;
    hello(): string | Promise<string>;
}

export interface IMutation {
    createTag(name: string): Tag | Promise<Tag>;
    createTodo(name: string): Todo | Promise<Todo>;
    toggleFinishedTodo(id: string): Todo | Promise<Todo>;
    deleteTodo(id: string): Todo[] | Promise<Todo[]>;
}

export interface Todo {
    id: string;
    name: string;
    finished: boolean;
    tag?: Tag;
}
