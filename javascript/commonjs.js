var obj = {
  name: new Date(),
  say: function () {
    console.log(this.name);
  },
};

module.exports.obj = obj;
