
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Todo {
    id: string;
    name: string;
    finished: boolean;
}

export interface IQuery {
    todos(): Todo[] | Promise<Todo[]>;
    hello(): string | Promise<string>;
}

export interface IMutation {
    createTodo(name: string): Todo | Promise<Todo>;
    toggleFinishedTodo(id: string): Todo | Promise<Todo>;
}
