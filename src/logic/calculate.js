import operate from './operate';

const calculate = (data, btn) => {
  const newData = { ...data };
  let { total, next, operation } = newData;

  if (btn === 'AC') {
    total = '';
    next = '';
    operation = null;
  } else if (
    btn === '+' ||
    btn === '-' ||
    btn === '/' ||
    btn === 'x' ||
    btn === '%'
  ) {
    operation = !next ? btn : null;
  } else if (btn === '+/-') {
    if (next) {
      next = next * (-1).toString();
    } else if (total) {
      total = total * (-1).toString();
    }
  } else if (btn === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = null;
  } else if (!operation) {
    total += btn;
  } else {
    next += btn;
  }
  return { total, next, operation };
};

export default calculate;
