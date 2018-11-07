import uuid from "uuid";
export const addNote = ({
    title= "",
    details= "",
    From= "",
    To= "",
    sentAt= 0
} = {})=>({
type:"ADD_NOTE",
note: {
id:uuid(),
title,
details,
From,
To,
sentAt
}});

export const removeNote = ({id}={}) =>({
type:"REMOVE_NOTE",
id
})