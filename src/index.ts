import { v4 as uuidv4 } from 'uuid';

const generateDirNames = (params) => {
  const { depth = 1, length = 2 } = params || {};
  const random = uuidv4().replace(/-/g, '');
  let d = depth;
  let l = length;

  if (length < 2) {
    l = 2;
  }

  const maxDepth = Math.floor(32 / l);

  if (depth > maxDepth) {
    d = maxDepth;
  } else if (depth < 1) {
    d = 1;
  }

  const subString = [...new Array(d)]
    .map(() => {
      return `(\\w{${l}})`;
    })
    .join('');

  const newString = [...new Array(d)]
    .map((_, index) => {
      return `$${index + 1}`;
    })
    .join('/');

  const reqexp = new RegExp(`^${subString}.*`, 'g');
  const result = random.replace(reqexp, newString);

  return result;
};

export default generateDirNames;
