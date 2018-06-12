module.exports = function({ types: babelTypes }) {
    return {
      name: "function-re-name",
      visitor: {
        FunctionDeclaration(path, state) {
            if('Identifier' === path.node.id.type){
                path.node.id.name = `prex_${path.node.id.name}`;                
            }                      
        }
      }
    };
  };
  