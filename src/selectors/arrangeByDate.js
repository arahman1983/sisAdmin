export const getVisibleData = (notes, { sentAt }) => {
  return notes.sort((a, b) => {
    return a.sentAt < b.sentAt ? 1 : -1;
  });
};

export const getVisibleScadual = (events, { date }) => {
  return events.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
};

export const getVisibleByGrade = (events, { grade }) => {
  return events.sort((a, b) => {
    return a.grade < b.grade ? 1 : -1;
  });
};
