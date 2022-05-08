const table = [
  {
    id: '1',
    title: '页面名称1',
    children: [
      {
        id: '1-1',
        title: '一级模块名称1',
        children: [
          {
            id: '1-1-1',
            title: '二级模块名称1',
            children: [
              {
                id: '1-1-1-1',
                title: '三级模块名称1',
              },
              {
                id: '1-1-1-2',
                title: '三级模块名称1',
              },
              {
                id: '1-1-1-3',
                title: '三级模块名称1',
              },
            ],
          },
          {
            id: '1-1-2',
            title: '二级模块名称2',
            children: [
              {
                id: '1-1-2-1',
                title: '三级模块名称4',
              },
              {
                id: '1-1-2-2',
                title: '三级模块名称5',
              },
              {
                id: '1-1-2-3',
                title: '三级模块名称6',
              },
            ],
          },
        ],
      },
    ],
  },
];

const travel = (data) => {
  let max = 1;
  data.map((item) => {
    if (item.children) {
      let dep = travel(item.children);
      if (dep + 1 > max) {
        max = dep + 1;
      }
    }
  });
  return max;
};

const getMaxDepth = (data) => {
  let max = 1;
  data.map((item) => {
    if (item.children) {
      let childDepth = getMaxDepth(item.children);
      if (max < 1 + childDepth) max = 1 + childDepth;
    }
  });
  return max;
};
let res = travel(table);
console.log(res);
