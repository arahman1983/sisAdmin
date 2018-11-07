

export const getVisibleData = (notes, {sentAt}) => {
    return notes.sort((a, b) => {
        return a.sentAt < b.sentAt ? 1 : -1;
    })
}

