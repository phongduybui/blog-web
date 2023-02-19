import moment from 'moment';

function removeSpaces(s: string) {
  return s.replace(/\s/g, '');
}

export const getReadingTime = (title: string, content: string) => {
  const wordCount = removeSpaces(title).length + removeSpaces(content).length;
  return `${(wordCount / 200).toFixed()} min`;
};

export const formatTime = (time: string, format: string = 'LL') => {
  return moment(time).format(format);
};
