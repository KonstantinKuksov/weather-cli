export const getArgs = (args) => {
  const res = {};
  const userArgs = args.splice(2);
  userArgs.forEach((arg, idx, arr) => {
    if (arg[0] === '-') {
      res[arg.substring(1)] = !arr[idx + 1] || arr[idx + 1][0] === '-' ? arg.substring(1) === 'h' : arr[idx + 1];
    }
  });
  return res;
};
