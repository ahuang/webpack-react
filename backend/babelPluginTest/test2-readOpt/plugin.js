module.exports = function({ types: babelTypes }) {
    return {
      name: "deadly-simple-plugin-example",
      visitor: {
        Identifier(path, state) {
            const oldNodeName = path.node.name;
            const opts = state.opts;
            if(opts[oldNodeName]){
                path.node.name = opts[oldNodeName]; // 替换
            }          
        }
      }
    };
  };
  